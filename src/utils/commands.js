const commands = [
    {
        id: 1,
        title: 'Change Directory',
        description: 'Change the current working directory to the specified directory.',
        commands: [
            { platform: 'mac', command: 'cd [directory]', example: 'cd Documents/' },
            { platform: 'linux', command: 'cd [directory]', example: 'cd /usr/bin/' },
            { platform: 'windows', command: 'cd [directory]', example: 'cd Documents\\' }
        ]
        
    },
    {
        id: 2,
        title: 'Listing Directory',
        description: 'List the contents of the current directory or the specified directory.',
        commands: [
            { platform: 'mac', command: 'ls [directory]', example: 'ls' },
            { platform: 'linux', command: 'ls [directory]', example: 'ls -l' },
            { platform: 'windows', command: 'dir [directory]', example: 'dir' }
        ]
    },
    {
        id: 3,
        title: 'Create File',
        description: 'Create a new file in the current directory with the specified name.',
        commands: [
            { platform: 'mac', command: 'touch [filename]', example: 'touch file.txt' },
            { platform: 'linux', command: 'touch [filename]', example: 'touch script.js' },
            { platform: 'windows', command: 'echo > [filename]', example: 'echo > file.txt' }
        ]
    },
    {
        id: 4,
        title: 'Delete File',
        description: 'Delete the specified file from the current directory.',
        commands: [
            { platform: 'mac', command: 'rm [filename]', example: 'rm file.txt' },
            { platform: 'linux', command: 'rm [filename]', example: 'rm -rf folder' },
            { platform: 'windows', command: 'del [filename]', example: 'del file.txt' }
        ]
    },
    {
        id: 5,
        title: 'Move File',
        description: 'Move the specified file to the specified destination directory.',
        commands: [
            { platform: 'mac', command: 'mv [source] [destination]', example: 'mv file.txt /documents' },
            { platform: 'linux', command: 'mv [source] [destination]', example: 'mv folder /backup' },
            { platform: 'windows', command: 'move [source] [destination]', example: 'move file.txt Documents\\' }
        ]
    },
    {
        id: 6,
        title: 'Copy File',
        description: 'Copy the specified file to the specified destination directory.',
        commands: [
            { platform: 'mac', command: 'cp [source] [destination]', example: 'cp file.txt /documents' },
            { platform: 'linux', command: 'cp [source] [destination]', example: 'cp folder /backup' },
            { platform: 'windows', command: 'copy [source] [destination]', example: 'copy file.txt Documents\\' }
        ]
    },
    {
        id: 7,
        title: 'Make Directory',
        description: 'Create a new directory with the specified name.',
        commands: [
            { platform: 'mac', command: 'mkdir [directory]', example: 'mkdir new_folder' },
            { platform: 'linux', command: 'mkdir [directory]', example: 'mkdir /path/to/new_folder' },
            { platform: 'windows', command: 'mkdir [directory]', example: 'mkdir new_folder' }
        ]
    },
    {
        id: 8,
        title: 'Remove Directory',
        description: 'Remove the specified directory.',
        commands: [
            { platform: 'mac', command: 'rm -r [directory]', example: 'rm -r folder' },
            { platform: 'linux', command: 'rm -r [directory]', example: 'rm -r folder' },
            { platform: 'windows', command: 'rmdir /s /q [directory]', example: 'rmdir /s /q folder' }
        ]
    },
    {
        id: 9,
        title: 'Print Working Directory',
        description: 'Display the current working directory.',
        commands: [
            { platform: 'mac', command: 'pwd', example: 'pwd' },
            { platform: 'linux', command: 'pwd', example: 'pwd' },
            { platform: 'windows', command: 'cd', example: 'cd' }
        ]
    },
    {
        id: 10,
        title: 'Copy Directory',
        description: 'Copy the specified directory to the specified destination.',
        commands: [
            { platform: 'mac', command: 'cp -r [source] [destination]', example: 'cp -r folder /backup' },
            { platform: 'linux', command: 'cp -r [source] [destination]', example: 'cp -r folder /backup' },
            { platform: 'windows', command: 'xcopy [source] [destination] /E /I', example: 'xcopy folder Documents\\Backup /E /I' }
        ]
    },
    {
        id: 11,
        title: 'Rename File or Directory',
        description: 'Rename the specified file or directory.',
        commands: [
            { platform: 'mac', command: 'mv [old_name] [new_name]', example: 'mv file.txt new_name.txt' },
            { platform: 'linux', command: 'mv [old_name] [new_name]', example: 'mv file.txt new_name.txt' },
            { platform: 'windows', command: 'ren [old_name] [new_name]', example: 'ren file.txt new_name.txt' }
        ]
    },
    {
        id: 12,
        title: 'Display File Contents',
        description: 'Display the contents of the specified file.',
        commands: [
            { platform: 'mac', command: 'cat [filename]', example: 'cat file.txt' },
            { platform: 'linux', command: 'cat [filename]', example: 'cat file.txt' },
            { platform: 'windows', command: 'type [filename]', example: 'type file.txt' }
        ]
    },
    ,
    {
        id: 13,
        title: 'Create Symbolic Link',
        description: 'Create a symbolic link to a file or directory.',
        commands: [
            { platform: 'mac', command: 'ln -s [target] [link_name]', example: 'ln -s /path/to/file.txt link.txt' },
            { platform: 'linux', command: 'ln -s [target] [link_name]', example: 'ln -s /path/to/file.txt link.txt' },
            { platform: 'windows', command: 'mklink /D [link_name] [target]', example: 'mklink /D link.txt C:\\path\\to\\file.txt' }
        ]
    },
    {
        id: 14,
        title: 'Change File Permissions',
        description: 'Change the permissions of a file or directory.',
        commands: [
            { platform: 'mac', command: 'chmod [permissions] [filename]', example: 'chmod 644 file.txt' },
            { platform: 'linux', command: 'chmod [permissions] [filename]', example: 'chmod 644 file.txt' },
            { platform: 'windows', command: 'icacls [filename] /grant [user]:[permissions]', example: 'icacls file.txt /grant Users:F' }
        ]
    },
    {
        id: 15,
        title: 'Find Files or Directories',
        description: 'Search for files or directories matching a pattern.',
        commands: [
            { platform: 'mac', command: 'find [directory] -name [pattern]', example: 'find . -name "*.txt"' },
            { platform: 'linux', command: 'find [directory] -name [pattern]', example: 'find . -name "*.txt"' },
            { platform: 'windows', command: 'dir /s /b [directory]\\[pattern]', example: 'dir /s /b C:\\path\\to\\*.txt' }
        ]
    },
];

export default commands;
