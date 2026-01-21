#!/bin/bash

# finish-task.sh - Complete task workflow with PR creation
# This script creates a pull request and optionally merges it

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}ℹ ${NC}$1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if gh CLI is installed and authenticated
if ! command -v gh &> /dev/null; then
    print_error "GitHub CLI (gh) is not installed"
    exit 1
fi

if ! gh auth status &> /dev/null; then
    print_error "GitHub CLI is not authenticated. Run: gh auth login"
    exit 1
fi

# Get current branch
current_branch=$(git branch --show-current)

if [ "$current_branch" = "main" ]; then
    print_error "Cannot finish task from main branch"
    exit 1
fi

# Extract issue number from branch name
issue_number=$(echo "$current_branch" | grep -o '[0-9]\+' | head -1)

if [ -z "$issue_number" ]; then
    print_warning "Could not extract issue number from branch name"
    issue_number=""
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    print_warning "You have uncommitted changes"
    read -p "Do you want to commit them now? [y/N]: " commit_now
    
    if [ "$commit_now" = "y" ] || [ "$commit_now" = "Y" ]; then
        read -p "Enter commit message: " commit_msg
        
        # Determine commit type based on branch prefix
        if [[ $current_branch == feat/* ]]; then
            prefix="feat"
        elif [[ $current_branch == fix/* ]]; then
            prefix="fix"
        else
            prefix="chore"
        fi
        
        git add -A
        git commit -m "${prefix}: ${commit_msg}"
        print_success "Changes committed"
    else
        print_error "Please commit your changes before finishing the task"
        exit 1
    fi
fi

# Push branch to remote
print_info "Pushing branch to remote..."
git push -u origin "$current_branch"
print_success "Branch pushed"

# Create PR summary
echo ""
read -p "Enter PR title (press Enter to auto-generate): " pr_title

if [ -z "$pr_title" ]; then
    # Auto-generate from branch name
    pr_title=$(echo "$current_branch" | sed 's/^[^/]*\///' | sed 's/-/ /g' | sed 's/^[0-9]* //')
fi

echo ""
read -p "Enter PR description (press Enter for default): " pr_description

if [ -z "$pr_description" ]; then
    # Generate commit summary
    pr_description="## Summary\n\nThis PR addresses the changes for: $pr_title\n\n## Changes\n\n"

    # Ensure origin/main exists and is reasonably up to date before comparing
    if git rev-parse --verify origin/main >/dev/null 2>&1; then
        if ! git fetch origin main >/dev/null 2>&1; then
            print_warning "Could not fetch origin/main; commit summary may be outdated."
        fi
        commit_summary=$(git log --oneline origin/main..HEAD | sed 's/^/- /')
    else
        print_warning "origin/main not found; using local commit history for summary."
        commit_summary=$(git log --oneline HEAD | sed 's/^/- /')
    fi

    pr_description+="$commit_summary\n\n"
    
    if [ -n "$issue_number" ]; then
        pr_description+="Closes #$issue_number"
    fi
fi

# Create pull request
print_info "Creating pull request..."

pr_args=(
    --title "$pr_title"
    --body "$pr_description"
    --base main
    --head "$current_branch"
)

if [ -n "$issue_number" ]; then
    pr_args+=(--web)
fi

pr_url=$(gh pr create "${pr_args[@]}")

print_success "Pull request created: $pr_url"

# Ask if should merge
echo ""
read -p "Do you want to merge this PR now? [y/N]: " merge_now

if [ "$merge_now" = "y" ] || [ "$merge_now" = "Y" ]; then
    print_info "Merging pull request..."
    gh pr merge --squash --delete-branch
    print_success "Pull request merged and branch deleted"
    
    # Switch back to main
    git checkout main
    git pull
    
    print_success "Switched to main branch and pulled latest changes"
else
    print_info "Pull request created but not merged"
    print_info "To merge later, run: gh pr merge --squash --delete-branch"
fi

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
print_success "Task workflow completed!"
echo ""
print_info "PR: $pr_url"
if [ -n "$issue_number" ]; then
    print_info "Issue: #$issue_number"
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
