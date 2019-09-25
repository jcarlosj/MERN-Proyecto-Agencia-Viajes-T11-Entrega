…or create a new repository on the command line
echo "# Prueva-agencia" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/Juanaliriogomez/Prueva-agencia.git
git push -u origin master
…or push an existing repository from the command line
git remote add origin https://github.com/Juanaliriogomez/Prueva-agencia.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.



Aquí un tutorial sobre git and github:
https://www.youtube.com/watch?v=yXT1ElMEkW8

----------------------Explicación Carlos Fullstack-------parte 2 actualización.---------------
1. crear repositorio on github
2. crear carpeta en el computador
3. abrir git bush dentro de la carpeta creada
4. ya abierto gitbush escribimos 
    4.1 git init              //enter
    4.2 git remote add origin urlwebrepogithub    //enter
    4.3 git status      //enter
    4.3.1 git add .    //enter   // desde aquí actualizamos ya cuando tenemos algo listo en el repositorio. 
    4.4 crear un archivo en visual y guardarlo en la carpet en la que estamos trabajando
    4.5 git status        // enter  así actualiza los archivos
    4.6 git commit -m "actualización documento"    //enter
    4.7 git push -u origin master      //enter


5. Cuando trabajamos con varias personas hacemos:      git pull   // enter, así nos actualiza el documentos desde el repositorio.

--------------Para crear otra rama---------------
1. git branch
2. git branch content
3. git branch 
4. git branch content
5. git checkout content
Creamos una carpeta nueva con el nombre content en nuestro sitio de trabajo, carpeta trabajo.
6. git checkout
7. git add .
8. git commit -m "comentario al respecto"
9. git push -u origin content 