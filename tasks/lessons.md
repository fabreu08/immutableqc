# Lessons Learned

## Initial (Empty)
- No lessons yet. Will append on failures.- Failure: npm ci without package-lock.json. Root: Missing lockfile in local Replit sync. Prevention: Check 'ls package-lock.json' before ci; use 'npm install' first.
- Failure: Local Replit folder not a Git repo. Root: Sync without .git. Prevention: Init git + add Replit remote before edits; escalate for URL.
- Failure: git add . on node_modules without .gitignore. Root: No ignore file, staged deps. Prevention: Create .gitignore before add; use git add src/ package.json etc.
- Failure: Replit git remote unreachable (DNS/host error). Root: Private repo or invalid URL. Prevention: Verify with token/SSH; test ping git.replit.com. - Failure: thirdweb/react hook 'useSendUserOperation' not exported in v5. Root: API change from v4. Prevention: Check docs for version-specific hooks (use useSendTransaction or wagmi pure).
- Failure: Import path '../app/client' invalid (file in root, client in src/app). Root: Relative path error. Prevention: Use absolute or correct relative (./src/app/client). - Failure: Replit git remote unreachable. Root: DNS/host or auth. Prevention: Test ping, use SSH with key or HTTPS token.
