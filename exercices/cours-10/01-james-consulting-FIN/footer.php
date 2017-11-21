<footer class="crop">
            <nav class="footer-nav">
                <?php include('menu.php'); ?>
            </nav>
            <div class="footer-bottom">
                <div class="footer-credits">
                    &copy; 2017 Bla bla bla
                </div>
                <div class="footer-socials">
                    <nav>
                        <ul>
                            <li><a href="#">
                                <i class="fa fa-twitter"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="fa fa-facebook"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="fa fa-google-plus"></i>
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>

        <div class="overlay toggle-menu"></div>

        <script src="js/jquery.1.11.3.min.js"></script>
        <?php if ($page=='home') { ?>
            <script src="js/slick/slick.min.js"></script>
        <?php } ?>
        <script src="js/jquery.matchHeight.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>