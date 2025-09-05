# Project Configuration - BRK-ECOM-RJS-Vittery-DEV

## Project Metadata
- **Name:** Vittery E-commerce Platform
- **Code:** BRK-ECOM-RJS-Vittery-DEV
- **Owner:** Alexander Salvador (BRK)
- **Created:** September 5, 2025
- **Status:** Development
- **Priority:** High

## Naming Convention Applied
- **BRK:** Personal brand prefix
- **ECOM:** E-commerce domain
- **RJS:** React.js stack identifier
- **Vittery:** Project name
- **DEV:** Development status

## Stack Details
- **Frontend:** React 18 + Vite 5
- **State:** Redux Toolkit
- **Backend:** Supabase
- **Language:** JavaScript/JSX
- **Styling:** (To be defined - CSS/Tailwind/Styled-components)

## Status Transitions
- [x] **DEV** - Current development phase
- [ ] **BETA** - Beta testing with users
- [ ] **RC** - Release candidate
- [ ] **PROD** - Production deployment

## Branch Strategy
- `main` - Production ready code
- `develop` - Integration branch
- `feature/store-*` - Store features
- `feature/admin-*` - Admin features
- `feature/auth-*` - Authentication features
- `fix/*` - Bug fixes
- `chore/*` - Maintenance tasks

## Commit Convention
```
feat(store): add product listing with pagination
fix(auth): handle token refresh on 401 errors  
refactor(ui): extract ProductCard component
docs(api): add authentication endpoints
```

## Next Steps
1. Set up authentication with Supabase
2. Create product catalog structure
3. Implement shopping cart functionality
4. Add payment integration
5. Build admin dashboard
