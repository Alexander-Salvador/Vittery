#!/bin/zsh
# BRK Project Aliases - Add to your ~/.zshrc

# === PROJECT NAVIGATION ===
alias cdp='cd ~/projects'
alias cdpers='cd ~/projects/personal'
alias cdprac='cd ~/projects/practice'  
alias cdwork='cd ~/projects/work'
alias cdvit='cd ~/projects/personal/BRK-ECOM-RJS-Vittery-DEV'

# === PROJECT CREATION ===
# Create frontend project with BRK convention
mkbrk() {
    if [[ $# -lt 3 ]]; then
        echo "Usage: mkbrk TYPE STACK NAME [STATUS]"
        echo "Example: mkbrk WEB RJS MyApp DEV"
        echo "Types: ECOM, WEB, APP, API, TOOL, LIB"
        echo "Stacks: RJS, NXT, VUE, SVE, ANG, TS"
        return 1
    fi
    
    local type=$1
    local stack=$2  
    local name=$3
    local status=${4:-DEV}
    local project_name="BRK-${type}-${stack}-${name}-${status}"
    
    mkdir -p "$project_name"/{src,public,tests/{unit,integration},docs,scripts,.project}
    echo "✅ Created: $project_name"
    echo "📁 Structure: src/ public/ tests/ docs/ scripts/ .project/"
}

# === GIT BRANCH HELPERS ===
# Feature branch
gfb() { git checkout -b "feature/$1"; }

# Fix branch  
gxb() { git checkout -b "fix/$1"; }

# Release branch
grb() { git checkout -b "release/$1"; }

# Chore branch
gcb() { git checkout -b "chore/$1"; }

# === COMMIT HELPERS ===
# Conventional commit shortcuts
gfeat() { git commit -m "feat($1): $2"; }
gfix() { git commit -m "fix($1): $2"; }
gdocs() { git commit -m "docs($1): $2"; }
grefactor() { git commit -m "refactor($1): $2"; }
gchore() { git commit -m "chore($1): $2"; }

# === STATUS UPDATES ===
# Update project status (DEV -> BETA -> RC -> PROD)
update-status() {
    local current_dir=$(basename $PWD)
    echo "Current project: $current_dir"
    echo "Available statuses: DEV, BETA, RC, PROD, ARCH"
    echo "Use: mv current-name new-name-with-status"
}

# === QUICK INFO ===
# Show project info
project-info() {
    echo "🏷️  Current Project: $(basename $PWD)"
    echo "📍 Path: $PWD"
    if [[ -f package.json ]]; then
        echo "📦 Package: $(jq -r '.name // "N/A"' package.json)"
        echo "🔢 Version: $(jq -r '.version // "N/A"' package.json)"
    fi
    if [[ -f .project/config.md ]]; then
        echo "📋 Config: .project/config.md exists"
    fi
    echo "🌿 Branch: $(git branch --show-current 2>/dev/null || 'No git')"
}

echo "🔧 BRK aliases loaded!"
echo "📖 Usage:"
echo "   mkbrk ECOM RJS MyShop DEV  - Create new project"
echo "   gfb cart-feature           - Create feature branch"
echo "   gfeat store 'add cart'     - Feature commit"
echo "   project-info               - Show project details"
