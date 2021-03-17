/*
* Description: Web Project Dekan Cup 2019.
* Version: 1.5.0
* Starting project: 2019/04/24
* Last update: 2018/05/05
* Author: Aezo27
*/

// Select
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);


// Alert Login & Signin | Logout Button | Comment | Get Query from URL
window.onload = function() {
var url_string = window.location.href;
var url = new URL(url_string);
var x = url.searchParams.get("pesan");
var y = url.searchParams.get("s"); 
var k = url.searchParams.get("isikomen"); 
var n = url.searchParams.get("nama"); 
var j = url.searchParams.get("jumkom"); 
var l = url.searchParams.get("asal"); 
var m = url.searchParams.get("tujuan"); 
var p = url.searchParams.get("submit");
var o = url.searchParams.get("pesawat");
var q = url.searchParams.get("kapal");
var r = url.searchParams.get("kereta");
var s = url.searchParams.get("beli")
if (x == "sukses") {
    swal("Pendaftaran Berhasil!", "Selamat anda sekarang terdaftar di Wonderfull Indonesia", "success") 
    .then(function() {
    window.location = "login.html";
    });
  }
else if (x == "berhasil") {
    swal("Login Berhasil!", "", "success") 
    .then(function() {
    window.location = "index.html?pesan=login"; 
    });
  }
else if (s == "sukses") {
  swal("Pemesanan Berhasil!", "", "success") 
  .then(function() {
  window.location = "telagasarangan.html"; 
  });
}
else if (x == "login") {
    document.getElementById("daftar").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
    document.getElementById("daftar1").style.display = "none";
    document.getElementById("login1").style.display = "none";
    document.getElementById("logout1").style.display = "block";
  }
  else if (j == "1") {
    var d = new Date();
    var bulan1 = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    var hari1 = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
    var waktu = new Date(),
        jam = waktu.getHours(),
        menit = waktu.getMinutes(),
        detik = waktu.getSeconds(),
        tanggal = new Date(),
        hari = tanggal.getDate(),
        bulan = tanggal.getMonth(),
        namahari = tanggal.getDay(),
        tt = tanggal.getYear(),
        tahun = (tt < 1000) ? tt + 1900 : tt;
        function nol(karepmu) {
        if (karepmu < 10) {
            karepmu = '0' + karepmu
        }
        return karepmu;
        }
    document.getElementById("waktu").innerHTML = (hari1[namahari] + ", " + nol(hari) + " " + bulan1[bulan] + " " + tahun)+" pada "+nol(jam) + ":" + nol(menit) + ":" + nol(detik);
    document.getElementById("komen").style.display = "block";
    document.getElementById("isikomen").innerHTML = k;
    document.getElementById("nama").innerHTML = n;
    document.getElementById("jumkom").innerHTML = j + " Komentar";
    document.getElementById("jumkom2").innerHTML = j + " komentar";
  }
  else if (p == "Pesan") {
  document.getElementById("asal").value = l;
  document.getElementById("tujuan").value = m;
  document.getElementById("pesawat").checked = o;
  document.getElementById("kapal").checked = q;
  document.getElementById("kereta").checked = r;
  }
  document.getElementById("hasilcari").innerHTML = "Menampilkan hasil pencarian untuk: " + y;
  }

  // Back Button
function kembali() {
  window.history.back();
}

// Input effect
$.efekkolom = {};
$.efekkolom.input = {
    activate: function ($parentSelector) {
        $parentSelector = $parentSelector || $('body');

        //On focus event
        $parentSelector.find('.form-control').focus(function () {
            $(this).closest('.form-line').addClass('focused');
        });

        //On focusout event
        $parentSelector.find('.form-control').focusout(function () {
            var $this = $(this);
            if ($this.parents('.form-group').hasClass('form-float')) {
                if ($this.val() == '') { $this.parents('.form-line').removeClass('focused'); }
            }
            else {
                $this.parents('.form-line').removeClass('focused');
            }
        });

        //On label click
        $parentSelector.on('click', '.form-float .form-line .form-label', function () {
            $(this).parent().find('input').focus();
        });

        //Not blank form
        $parentSelector.find('.form-control').each(function () {
            if ($(this).val() !== '') {
                $(this).parents('.form-line').addClass('focused');
            }
        });
    }
}
$(function () {
    $.efekkolom.input.activate();

    setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 50);
});

// Show Password
$('.unmask').on('click', function(){

  if($(this).prev('input').attr('type') == 'password')
    changeType($(this).prev('input'), 'text');

  else
    changeType($(this).prev('input'), 'password');

  return false;
});

function changeType(x, type) {
  if(x.prop('type') == type)
  return x; //That was easy.
  try {
    return x.prop('type', type); //Stupid IE security will not allow this
  } catch(e) {
    //Try re-creating the element (yep... this sucks)
    //jQuery has no html() method for the element, so we have to put into a div first
    var html = $("<div>").append(x.clone()).html();
    var regex = /type=(\")?([^\"\s]+)(\")?/; //matches type=text or type="text"
    //If no match, we add the type attribute to the end; otherwise, we replace
    var tmp = $(html.match(regex) == null ?
      html.replace(">", ' type="' + type + '">') :
      html.replace(regex, 'type="' + type + '"') );
    //Copy data from old element
    tmp.data('type', x.data('type') );
    var events = x.data('events');
    var cb = function(events) {
      return function() {
            //Bind all prior events
            for(i in events)
            {
              var y = events[i];
              for(j in y)
                tmp.bind(i, y[j].handler);
            }
          }
        }(events);
        x.replaceWith(tmp);
    setTimeout(cb, 10); //Wait a bit to call function
    return tmp;
  }
}


// Sign In
$(function () {
    $('#sign_in').validate({
        highlight: function (input) {
            console.log(input);
            $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.input-group').append(error);
        }
    });
});

// Sing Up
$(function () {
    $('#sign_up').validate({
        rules: {
            'terms': {
                required: true
            },
            'confirm': {
                equalTo: '[name="password"]'
            }
        },
        highlight: function (input) {
            console.log(input);
            $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.input-group').append(error);
            $(element).parents('.form-group').append(error);
        }
    });
});

// SlideShow
    // SlideShow 1
    jssor_1_slider_init = function() {

            var jssor_1_SlideshowTransitions = [
              {$Duration:800,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:800,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
            ];

            var jssor_1_options = {
              $AutoPlay: 1,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Orientation: 2,
                $NoDrag: false
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 980;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
/*#SlideShow 1 Code End*/


    // SlideShow 2
jssor_2_slider_init = function() {

            var jssor_1_SlideshowTransitions = [
              {$Duration:800,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
            ];

            var jssor_1_options = {
              $AutoPlay: 1,
              $SlideDuration: 50,
              $SlideEasing: $Jease$.$Linear,
              $SlideWidth: 156,
              $SlideSpacing: 10,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_2", jssor_1_options);
            var jssor_2_slider = new $JssorSlider$("jssor_3", jssor_1_options);
            var jssor_4_slider = new $JssorSlider$("jssor_4", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 940;

            // function ScaleSlider() {
            //     var containerElement = jssor_1_slider.$Elmt.parentNode;
            //     var containerWidth = containerElement.clientWidth;

            //     if (containerWidth) {

            //         var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            //         jssor_1_slider.$ScaleWidth(expectedWidth);
            //     }
            //     else {
            //         window.setTimeout(ScaleSlider, 30);
            //     }
            // }

            // ScaleSlider();

            // $Jssor$.$AddEvent(window, "load", ScaleSlider);
            // $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            // $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };

// Back To Top
jQuery(".up").click(function() {
    jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
});
if (jQuery('.up').length) {
        var refScroll = jQuery('header');
        var refScroll_offset = refScroll.offset();
        
        jQuery(window).on('scroll', function() {
            if(jQuery(window).scrollTop() > refScroll_offset.top) {
              jQuery(".up").show(500);
            } else {
              jQuery(".up").hide();
            }
        });
}
/*#Back To Top Code End*/


// Slide Menu
function tampilnav() {
    document.getElementById("mysidenav").style.width = "250px";
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("overlay").style.width= "100%";
}

function tutupnav() {
    document.getElementById("mysidenav").style.width = "0";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("overlay").style.width = "0";
}
/*#Slide Menu Code End*/

// Dropdown Sidenav
function tutup() {
  document.getElementById("drop2").classList.toggle("tampil");
  document.getElementById("down2").classList.toggle("on");
}

// 
window.onclick = function(event) {
  if (!event.target.matches('.drop2')) {
    var dropdowns = document.getElementsByClassName("down2");
    var dropdown = document.getElementsByClassName("drop2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('on')) {
        openDropdown.classList.remove('on');
      }
    }
        for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('tampil')) {
        openDropdown.classList.remove('tampil');
      }
    }
  }
}

/*#Dropdown Sidenav End*/
