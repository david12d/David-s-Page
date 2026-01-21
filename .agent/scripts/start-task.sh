#!/bin/bash

# start-task.sh - Automated task workflow initialization
# This script creates a GitHub issue and corresponding feature branch

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

# Get task information
echo ""
print_info "Starting new task workflow..."
echo ""

# Prompt for task type
echo "Select task type:"
echo "  1) Feature"
echo "  2) Bug Fix"
echo "  3) Task/Chore"
echo ""
read -p "Enter choice [1-3]: " task_type

case $task_type in
    1)
        LABEL="enhancement"
        PREFIX="feat"
        TEMPLATE="feature"
        ;;
    2)
        LABEL="bug"
        PREFIX="fix"
        TEMPLATE="bug"
        ;;
    3)
        LABEL="task"
        PREFIX="chore"
        TEMPLATE="task"
        ;;
    *)
        print_error "Invalid choice"
        exit 1
        ;;
esac

# Get task title
echo ""
read -p "Enter task title: " task_title

if [ -z "$task_title" ]; then
    print_error "Task title cannot be empty"
    exit 1
fi

# Get task description
echo ""
read -p "Enter task description: " task_description

# Create GitHub issue
print_info "Creating GitHub issue..."
issue_url=$(gh issue create \
    --title "$task_title" \
    --body "$task_description" \
    --label "$LABEL" \
    --web)

# Extract issue number from URL
issue_number=$(echo "$issue_url" | grep -o '[0-9]\+$')

print_success "Issue #$issue_number created: $issue_url"

# Create branch name
branch_name="${PREFIX}/${issue_number}-$(echo "$task_title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g')"

# Create and checkout new branch
print_info "Creating branch: $branch_name"
git checkout -b "$branch_name"

print_success "Branch created and checked out"

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
print_success "Task workflow initialized!"
echo ""
print_info "Issue: #$issue_number"
print_info "Branch: $branch_name"
print_info "Next steps:"
echo "  1. Make your changes incrementally"
echo "  2. Commit with: git commit -m '${PREFIX}: <message>'"
echo "  3. Run tests after each significant chunk"
echo "  4. When ready, run: .agent/scripts/finish-task.sh"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
