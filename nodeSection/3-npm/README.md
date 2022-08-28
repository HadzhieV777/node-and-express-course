npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

npm consists of three distinct components:

    the website
    the Command Line Interface (CLI)
    the registry
    

Use npm to . . .

    Adapt packages of code for your apps, or incorporate packages as they are.
    Download standalone tools you can use right away.
    Run packages without downloading using npx.
    Share code with any npm user, anywhere.
    Restrict code to specific developers.
    Create organizations to coordinate package maintenance, coding, and developers.
    Form virtual teams by using organizations.
    Manage multiple versions of code and code dependencies.
    Update applications easily when underlying code is updated.
    Discover multiple ways to solve the same puzzle.
    Find other developers who are working on similar problems and projects. 
    
<!-- REF => https://docs.npmjs.com/about-npm -->


npx(1) -- execute npm package binaries

DESCRIPTION

Executes <command> either from a local node_modules/.bin, or from a central cache, installing any packages needed in order for <command> to run.

By default, npx will check whether <command> exists in $PATH, or in the local project binaries, and execute that. If <command> is not found, it will be installed prior to execution.

Unless a --package option is specified, npx will try to guess the name of the binary to invoke depending on the specifier provided. All package specifiers understood by npm may be used with npx, including git specifiers, remote tarballs, local directories, or scoped packages.

If a full specifier is included, or if --package is used, npx will always use a freshly-installed, temporary version of the package. This can also be forced with the --ignore-existing flag.

    -p, --package <package> - define the package to be installed. This defaults to the value of <command>. This is only needed for packages with multiple binaries if you want to call one of the other executables, or where the binary name does not match the package name. If this option is provided <command> will be executed as-is, without interpreting @version if it's there. Multiple --package options may be provided, and all the packages specified will be installed.

    --no-install - If passed to npx, it will only try to run <command> if it already exists in the current path or in $prefix/node_modules/.bin. It won't try to install missing commands.

    --cache <path> - set the location of the npm cache. Defaults to npm's own cache settings.

    --userconfig <path> - path to the user configuration file to pass to npm. Defaults to whatever npm's current default is.

    -c <string> - Execute <string> inside an npm run-script-like shell environment, with all the usual environment variables available. Only the first item in <string> will be automatically used as <command>. Any others must use -p.

    --shell <string> - The shell to invoke the command with, if any.

    --shell-auto-fallback [<shell>] - Generates shell code to override your shell's "command not found" handler with one that calls npx. Tries to figure out your shell, or you can pass its name (either bash, fish, or zsh) as an option. See below for how to install.

    --ignore-existing - If this flag is set, npx will not look in $PATH, or in the current package's node_modules/.bin for an existing version before deciding whether to install. Binaries in those paths will still be available for execution, but will be shadowed by any packages requested by this install.

    -q, --quiet - Suppressed any output from npx itself (progress bars, error messages, install reports). Subcommand output itself will not be silenced.

    -n, --node-arg - Extra node argument to supply to node when binary is a node script. You can supply this option multiple times to add more arguments.

    -v, --version - Show the current npx version.

<!--  REF https://www.npmjs.com/package/npx -->