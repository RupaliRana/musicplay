<!DOCTYPE html>
<!-- Coding By CodingNepal - youtube.com/codingnepal -->
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Player </title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" />
</head>



<body>
    <div class="sidebar">
        <div class="logo">
            <img src="" alt="">
        </div>
        <div class="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span class="bi bi-house"></span>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="explore.html">
                        <span class="bi bi-search"></span>
                        <span>Explore</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="bi bi-music-note-list"></span>
                        <span>My List</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span class="bi bi-bookmark-plus"></span>

                        <span>Profile</span>
                    </a>
                </li>

                <li>
                    <a href="#">

                        <span class="bi bi-person-circle"></span>
                        <span>About</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
<div class="main-container">
    <?php 
      $allMusic = json_decode($_POST['data']);
      foreach($allMusic as $Music){
        print_r($Music->name);
      }  
     ?>
</div>