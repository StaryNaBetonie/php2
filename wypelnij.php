<!DOCTYPE HTML>
<html lang="pl">
<head>
    <meta charset="wtf-8" />
    <title>Zgłoś</title>
</head>
<body>
    <script src="plik1.js"></script>
    <form action="zglos.php" method="post" enctype="multipart/form-data">
        Tytul: <br/><input type="text" name="tytul"><br/>
        Opis: <br/><input type="text" name="opis"><br/>
        Pozycja_x: <br/><input type="text" name="pozycja_x" value="0"><br/>
        Pozycja_y: <br/><input type="text" name="pozycja_y" value="0"><br/>
        Zdjęcie: <br/><input type="file" name="zdjecie"><br/><br/>
        <button name="typ" type="submit" value="Przyroda">Przyroda</button>
        <button name="typ" type="submit" value="Infrastruktura">Infrastruktura</button>
        <button name="typ" type="submit" value="Droga">Droga</button>
        <button name="typ" type="submit" value="Inne">Inne</button>
    </form>

</body>
<html>