$> ls -l
-rwxr-xr-x 1 wil user42 42 มิ.ย. 14 23:42 build.sh

$> ./build.sh
No arguments supplied

$> ./build.sh 00

$> ls -l
-rwxr-xr-x 1 wil user42 42 มิ.ย. 14 23:42 build.sh
drwxr-xr-x 2 wil user42 4.0K มิ.ย. 14 23:42 ex00

$> ./build.sh 01 02 03 04

$> ls -l
-rwxr-xr-x 1 wil user42 42 มิ.ย. 14 23:42 build.sh
drwxr-xr-x 2 wil user42 4.0K มิ.ย. 14 23:42 ex00
drwxr-xr-x 2 wil user42 4.0K มิ.ย. 14 23:42 ex01
drwxr-xr-x 2 wil user42 4.0K มิ.ย. 14 23:42 ex02
drwxr-xr-x 2 wil user42 4.0K มิ.ย. 14 23:42 ex03
drwxr-xr-x 2 wil user42 4.0K มิ.ย. 14 23:42 ex04

