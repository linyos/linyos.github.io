function openNav(){
    document.getElementById("main").style.marginLeft="25%";
    document.getElementById("mySidenav").style.width="25%";
    document.getElementById("mySidenav").style.display="block";
    document.getElementById("openNav").style.display = 'none';
}


function closeNav(){
    document.getElementById("main").style.marginLeft="0%";
    document.getElementById("mySidenav").style.display="none";
    document.getElementById("openNav").style.display="inline-block";
}