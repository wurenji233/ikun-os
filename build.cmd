@del output-MinGW-i386 /q
@configure.cmd -DENABLE_ROSAPPS=1 -DENABLE_WALLPAPERS=1&&@cd output-MinGW-i386&&@echo Begin make bootcd!&&@ninja bootcd&&@cd..

