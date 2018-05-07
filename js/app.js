$(document).ready(() => {

  // === SVG ICONS === //

  const digestIcon = "<?xml version='1.0' encoding='UTF-8'?><svg class='digest-icon' width='19px' height='19px' viewBox='0 0 48 48' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --><title>theicons.co/svg/ui-82</title><desc>Created with Sketch.</desc><defs></defs><g id='The-Icons' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='v-1.5' transform='translate(-1536.000000, -2880.000000)' fill='#000000'><g id='UI' transform='translate(96.000000, 2496.000000)'><g id='Calendar-1' transform='translate(1440.000000, 384.000000)'><path d='M40,12.0002124 C40,10.8950241 39.1073867,10 38.0098214,10 C38,11.1047419 37.1122704,12 36,12 C34.8954305,12 34,11.1125667 34,10.000385 L30,10 C30,11.1047419 29.1122704,12 28,12 C26.8954305,12 26,11.1125667 26,10.000385 L22,10 C22,11.1047419 21.1122704,12 20,12 C18.8954305,12 18,11.1125667 18,10.000385 L14,10 C14,11.1047419 13.1122704,12 12,12 C10.8954305,12 10,11.1125667 10,10.000385 C8.89145651,10 8,10.8938867 8,12.0002124 L8,16 L40,16 L40,12.0002124 Z M8,20 L8,37.9997876 C8,39.1049759 8.89261326,40 9.99017859,40 L38.0098214,40 C39.1085435,40 40,39.1061133 40,37.9997876 L40,20 L8,20 Z M44,12.0002124 L44,37.9997876 C44,41.3128183 41.3201238,44 38.0098214,44 L9.99017859,44 C6.68105549,44 4,41.3117034 4,37.9997876 L4,12.0002124 C4,8.68718171 6.67987615,6 9.99017859,6 L10,3.99961498 C10,2.89525812 10.8877296,2 12,2 C13.1045695,2 14,2.88743329 14,3.99961498 L14,6 L18,6 L18,3.99961498 C18,2.89525812 18.8877296,2 20,2 C21.1045695,2 22,2.88743329 22,3.99961498 L22,6 L26,6 L26,3.99961498 C26,2.89525812 26.8877296,2 28,2 C29.1045695,2 30,2.88743329 30,3.99961498 L30,6 L34,6 L34,3.99961498 C34,2.89525812 34.8877296,2 36,2 C37.1045695,2 38,2.88743329 38,3.99961498 L38,6 C41.3189445,6 44,8.68829665 44,12.0002124 Z' id='Combined-Shape'></path></g></g></g></g></svg>";

  const companyIcon = "<div class='navigation-icon-div'><?xml version='1.0' encoding='UTF-8'?><svg width='24px' height='24px' viewBox='0 0 48 48' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --><title>theicons.co/svg/ui-45</title><desc>Created with Sketch.</desc><defs></defs><g id='The-Icons' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='v-1.5' transform='translate(-1440.000000, -2688.000000)' fill='#000000'><g id='UI' transform='translate(96.000000, 2496.000000)'><g id='Archive-2' transform='translate(1344.000000, 192.000000)'><path d='M7.81084611,38.2082123 L6.20900513,22.1898026 C5.98117665,19.9115177 7.70744579,18 10.0017433,18 L37.9982567,18 C40.2878134,18 42.0192167,19.907584 41.7909949,22.1898026 L40.1891539,38.2082123 C39.9773254,40.3264968 38.1312244,42 36.0087557,42 L11.9912443,42 C9.86085917,42 8.02333433,40.3330945 7.81084611,38.2082123 Z M37.7884441,22.0158073 L10.2108174,22.0084227 L12,38 L36,38 L37.7884441,22.0158073 Z M14,8 C14,6.8954305 14.8982124,6 15.9907951,6 L32.0092049,6 C33.1086907,6 34,6.88772964 34,8 C34,9.1045695 33.1017876,10 32.0092049,10 L15.9907951,10 C14.8913093,10 14,9.11227036 14,8 Z M10,14 C10,12.8954305 10.8998975,12 11.9912443,12 L36.0087557,12 C37.1084896,12 38,12.8877296 38,14 C38,15.1045695 37.1001025,16 36.0087557,16 L11.9912443,16 C10.8915104,16 10,15.1122704 10,14 Z' id='Combined-Shape' class='sidebar-icon'></path></g></g></g></g></svg></div>";

  const lockedIcon = "<div class='digest-icon-div'><?xml version='1.0' encoding='UTF-8'?><svg width='24px' height='24px' viewBox='0 0 48 48' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --><title>theicons.co/svg/ui-09</title><desc>Created with Sketch.</desc><defs></defs><g id='The-Icons' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='v-1.5' transform='translate(-960.000000, -2496.000000)' fill='#000000'><g id='UI' transform='translate(96.000000, 2496.000000)'><g id='Locked' transform='translate(864.000000, 0.000000)'><path d='M20,31 C20,28.790861 21.790861,27 24,27 C26.209139,27 28,28.790861 28,31 C28,32.4805647 27.1956027,33.7732524 26,34.4648712 L26,36.0018986 C26,37.1054196 25.1122704,38 24,38 C22.8954305,38 22,37.1132936 22,36.0018986 L22,34.4648712 C20.8043973,33.7732524 20,32.4805647 20,31 Z M12,16.0003162 C12,9.37235683 17.3717364,4 24,4 C30.6261936,4 36,9.37555373 36,16.0005127 L36,21.000002 C38.2095333,21.0022923 40,22.7870582 40,25.0062943 L40,39.9937057 C40,42.206321 38.2109725,44 35.9957423,44 L12.0042577,44 C9.79276724,44 8,42.2143671 8,39.9937057 L8,25.0062943 C8,22.7950968 9.78673561,21.0022988 12,21.0000022 L12,16.0003162 Z M16,21 L32,21 L32,16.0005127 C32,11.5844017 28.4167634,8 24,8 C19.5809788,8 16,11.5813924 16,16.0003162 L16,21 Z M12,25 L12,40 L36,40 L36,25 L12,25 Z' id='Combined-Shape' class='sidebar-icon'></path></g></g></g></g></svg></div>";

  const searchIcon = "<?xml version='1.0' encoding='UTF-8'?><svg width='19px' height='19px' viewBox='0 0 48 48' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --> <title>theicons.co/svg/ui-37</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='The-Icons' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='v-1.5' transform='translate(-576.000000, -2688.000000)' fill='#000000'> <g id='UI' transform='translate(96.000000, 2496.000000)'> <g id='Search' transform='translate(480.000000, 192.000000)'> <path class='search-icon' d='M42.784429,39.9560018 C43.5620233,40.7335962 43.5646685,41.9916807 42.7781746,42.7781746 C41.997126,43.5592232 40.7348665,43.5632937 39.9560018,42.784429 L29.0982455,31.9266726 C26.5746478,33.8547284 23.4210701,35 20,35 C11.7157288,35 5,28.2842712 5,20 C5,11.7157288 11.7157288,5 20,5 C28.2842712,5 35,11.7157288 35,20 C35,23.4210701 33.8547284,26.5746478 31.9266726,29.0982455 L42.784429,39.9560018 Z M20,31 C26.0751322,31 31,26.0751322 31,20 C31,13.9248678 26.0751322,9 20,9 C13.9248678,9 9,13.9248678 9,20 C9,26.0751322 13.9248678,31 20,31 Z' id='Combined-Shape'></path> </g> </g> </g> </g></svg>";

  const expand = "<svg width='15px' height='8px' viewBox='0 0 15 8' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --><desc>Created with Sketch.</desc><defs></defs><g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Mobile:-Option-1' transform='translate(-15.000000, -84.000000)' fill='#C5C6C8' fill-rule='nonzero'><g id='Group-5' transform='translate(15.000000, 77.000000)'><path d='M11.6187184,5.49371843 C11.9604272,5.15200968 11.9604272,4.59799032 11.6187184,4.25628157 C11.2770097,3.91457281 10.7229903,3.91457281 10.3812816,4.25628157 L4.25628157,10.3812816 C3.91457281,10.7229903 3.91457281,11.2770097 4.25628157,11.6187184 L10.3812816,17.7437184 C10.7229903,18.0854272 11.2770097,18.0854272 11.6187184,17.7437184 C11.9604272,17.4020097 11.9604272,16.8479903 11.6187184,16.5062816 L6.11243687,11 L11.6187184,5.49371843 Z' id='Path-82' transform='translate(7.937500, 11.000000) scale(1, -1) rotate(90.000000) translate(-7.937500, -11.000000) '></path></g></g></g></svg>";

  const buttonColumn = "<?xml version='1.0' encoding='UTF-8'?><svg width='16px' height='16px' viewBox='0 0 48 48' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --><title>theicons.co/svg/grid-03</title><desc>Created with Sketch.</desc><defs></defs><g id='The-Icons' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='v-1.5' transform='translate(-288.000000, -2208.000000)' fill='#000000'><g id='Grid' transform='translate(96.000000, 2208.000000)'><g id='Blocks' transform='translate(192.000000, 0.000000)'><path d='M40.0059397,6 C41.1072288,6 42,6.89451376 42,7.99406028 L42,20.0059397 C42,21.1072288 41.1054862,22 40.0059397,22 L27.9940603,22 C26.8927712,22 26,21.1054862 26,20.0059397 L26,7.99406028 C26,6.8927712 26.8945138,6 27.9940603,6 L40.0059397,6 Z M38,10 L30,10 L30,18 L38,18 L38,10 Z M20.0059397,6 C21.1072288,6 22,6.89451376 22,7.99406028 L22,20.0059397 C22,21.1072288 21.1054862,22 20.0059397,22 L7.99406028,22 C6.8927712,22 6,21.1054862 6,20.0059397 L6,7.99406028 C6,6.8927712 6.89451376,6 7.99406028,6 L20.0059397,6 Z M18,10 L10,10 L10,18 L18,18 L18,10 Z M6,27.9940603 C6,26.8927712 6.89451376,26 7.99406028,26 L20.0059397,26 C21.1072288,26 22,26.8945138 22,27.9940603 L22,40.0059397 C22,41.1072288 21.1054862,42 20.0059397,42 L7.99406028,42 C6.8927712,42 6,41.1054862 6,40.0059397 L6,27.9940603 Z M10,30 L10,38 L18,38 L18,30 L10,30 Z M26,27.9940603 C26,26.8927712 26.8945138,26 27.9940603,26 L40.0059397,26 C41.1072288,26 42,26.8945138 42,27.9940603 L42,40.0059397 C42,41.1072288 41.1054862,42 40.0059397,42 L27.9940603,42 C26.8927712,42 26,41.1054862 26,40.0059397 L26,27.9940603 Z M30,30 L30,38 L38,38 L38,30 L30,30 Z' id='Combined-Shape'></path></g></g></g></g></svg>";

  const buttonBlock = "<?xml version='1.0' encoding='UTF-8'?><svg width='16px' height='16px' viewBox='0 0 48 48' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --><title>theicons.co/svg/grid-06</title><desc>Created with Sketch.</desc><defs></defs><g id='The-Icons' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='v-1.5' transform='translate(-576.000000, -2208.000000)' fill='#000000'><g id='Grid' transform='translate(96.000000, 2208.000000)'><g id='List' transform='translate(480.000000, 0.000000)'><path d='M42,15.9940603 L42,32.0059397 C42,33.1072288 41.1101074,34 40.0002927,34 L7.99970728,34 C6.89529944,34 6,33.1054862 6,32.0059397 L6,15.9940603 C6,14.8927712 6.88989258,14 7.99970728,14 L40.0002927,14 C41.1047006,14 42,14.8945138 42,15.9940603 Z M6,8 C6,6.8954305 6.88989258,6 7.99970728,6 L40.0002927,6 C41.1047006,6 42,6.88772964 42,8 C42,9.1045695 41.1101074,10 40.0002927,10 L7.99970728,10 C6.89529944,10 6,9.11227036 6,8 Z M6,40 C6,38.8954305 6.88989258,38 7.99970728,38 L40.0002927,38 C41.1047006,38 42,38.8877296 42,40 C42,41.1045695 41.1101074,42 40.0002927,42 L7.99970728,42 C6.89529944,42 6,41.1122704 6,40 Z M38,30 L38,18 L10,18 L10,30 L38,30 Z' id='Combined-Shape'></path></g></g></g></g></svg>";

  const littleArrow = "<svg class='menu-dropdown' width='9px' height='6px' viewBox='0 0 9 6' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --><desc>Created with Sketch.</desc><defs></defs><g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Updated:-stream-(smaller,-expanded)' transform='translate(-1248.000000, -29.000000)' fill='#C4C6C9'><g id='Group-7'><path  d='M1251.47012,29.3297862 C1251.80015,28.8897513 1252.33571,28.8903914 1252.66525,29.3297862 L1255.97012,33.7362788 C1256.30015,34.1763137 1256.12137,34.5330325 1255.57014,34.5330325 L1248.56523,34.5330325 C1248.0143,34.5330325 1247.83571,34.1756736 1248.16525,33.7362788 L1251.47012,29.3297862 Z' id='Triangle-2' transform='translate(1252.067827, 31.766516) scale(1, -1) translate(-1252.067827, -31.766516) '></path></g></g></g></svg>";

  const notificationBell = "<?xml version='1.0' encoding='UTF-8'?><svg class= 'notification-bell' width='16px' height='20px' viewBox='0 0 48 48' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --><title>theicons.co/svg/ui-11</title><desc>Created with Sketch.</desc><defs></defs><g id='The-Icons' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='v-1.5' transform='translate(-1344.000000, -2496.000000)' fill='#000000'><g id='UI' transform='translate(96.000000, 2496.000000)'><g id='Bell' transform='translate(1248.000000, 0.000000)'><path d='M12.0042577,40 C8.68987957,40 6,37.3108948 6,34 C6,31.8024742 7.18983536,29.8438302 9.00844297,28.7977476 C9.00844288,28.1907787 9,20.9971755 9,20.9971755 C9,14.0862012 13.6393929,8.26772191 20,6.52945872 L20,6 C20,3.790861 21.790861,2 24,2 C26.209139,2 28,3.790861 28,6 L28,6.52945872 C34.3619693,8.26735518 39,14.086356 39,21.0075959 L39,28.815212 C40.8207419,29.8662158 42,31.8167018 42,34 C42,37.315187 39.314063,40 35.9957423,40 L29.9999968,40 C29.9966158,43.3142875 27.304888,46 24,46 C20.6862915,46 18,43.3164546 18,40.0042999 L12.0042577,40 Z M22,40 C22,41.1063051 22.8944204,42 24,42 C25.0978445,42 25.9966061,41.1030697 25.9999904,40 L22,40 Z M35,30.6721906 L35,21.0075959 C35,14.9214627 30.0787001,10 24,10 C17.9237746,10 13,14.9231178 13,20.9971755 L13,30.6721374 C13,31.23156 12.5704841,31.7874287 12.0406493,31.9238273 L11.4986148,32.0633665 C10.6230089,32.288779 10,33.0818983 10,34 C10,35.1014979 10.8987608,36 12.0042577,36 L35.9957423,36 C37.1052987,36 38,35.1056731 38,34 C38,33.0858917 37.374453,32.2896743 36.4994183,32.063461 L35.9749946,31.9278873 C35.4417651,31.7900372 35,31.2264866 35,30.6721906 Z' id='Combined-Shape'></path></g></g></g></g></svg>";

  const ellipsesMenu = "<svg width='4px' height='20px' viewBox='0 0 4 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --><desc>Created with Sketch.</desc><defs></defs><g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' opacity='0.5'><g id='Final:-stream-(April)' transform='translate(-1112.000000, -199.000000)' fill='#898D93'><g id='Group-20' transform='translate(340.000000, 176.000000)'><g id='Group-18' transform='translate(24.000000, 14.000000)'><g id='Group-6' transform='translate(604.000000, 6.000000)'><path d='M146,7 C144.895431,7 144,6.1045695 144,5 C144,3.8954305 144.895431,3 146,3 C147.104569,3 148,3.8954305 148,5 C148,6.1045695 147.104569,7 146,7 Z M146,15 C144.895431,15 144,14.1045695 144,13 C144,11.8954305 144.895431,11 146,11 C147.104569,11 148,11.8954305 148,13 C148,14.1045695 147.104569,15 146,15 Z M146,23 C144.895431,23 144,22.1045695 144,21 C144,19.8954305 144.895431,19 146,19 C147.104569,19 148,19.8954305 148,21 C148,22.1045695 147.104569,23 146,23 Z' id='Combined-Shape-Copy'></path></g></g></g></g></g></svg>";

  const dotDivider = "<svg class='dot-divider' width='3px' height='3px' viewBox='0 0 3 3' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --><desc>Created with Sketch.</desc><defs></defs><g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Final:-stream-(April)' transform='translate(-466.000000, -216.000000)' fill='#898D93'><g id='Group-20' transform='translate(340.000000, 176.000000)'><g id='Group-18' transform='translate(24.000000, 14.000000)'><circle id='Oval-7-Copy' cx='103.5' cy='27.5' r='1.5'></circle></g></g></g></g></svg>";

  // Prepend icons:
  $(".mobile-digest-view").append(digestIcon);
  $(".company-name").prepend(companyIcon);
  $(".locked").prepend(lockedIcon);
  $(".search-field-area").append(searchIcon);
  $(".expand-mobile").prepend(expand);
  $(".button-block").append(buttonBlock);
  $(".button-column").append(buttonColumn);
  $(".profile-dropdown").append(littleArrow);
  $(".notifications").append(notificationBell);
  $(".card-header").append(ellipsesMenu);
  $(".card-header-time").append(dotDivider);

  // === Window Resize Events ===

  $(window).on('resize', () => {
    //header is down
    $('.main-header').animate({
      top: '0'
    }, 150);
    $('.expand-mobile').animate({
      top: '64px'
    }, 150);
    // Mobile & Sidebar Navigation Display Resets:

    if ($(window).width() < 768 && !menuExpanded) {
      $(".navigation-sidebar-area").css("display", "none");
    }

    if ($(window).width() > 767 && menuExpanded) {
      menuExpanded = false;
      $(".navigation-sidebar-area").css("display", "none");
      $(".expand-mobile svg").css("transform", "none");
      $(".wrapper").show();
    }

    // Medium Screens:
    if ($(window).width() > 767) {
      $(".navigation-sidebar-area").css("display", "block");
    }

    // Large Screens:
    // if ($(window).width() > 992) {}

    // XLarge Screens:
    // if ($(window).width() > 1200) {}

  }); //End if .on('resize');

  // This will probably change, but give the current a href attribute class active:
  //   $(".main-nav a").each(function() {
  //     if (this.href == window.location.href) {
  //         $(this).addClass("active");
  //     }
  // });

  //Toggle Mobile Navigation:

  //Prepend the active page name to .expand-mobile and remove icons:
  $(".expand-mobile").append($(".active li").html());
  $(".expand-mobile").find(".navigation-icon-div").remove();

  let scrollPosition = 0;
  //Find scroll position before click:
  let menuExpanded = false;
  $(".expand-mobile").click(() => {
    if (!menuExpanded) {
      scrollPosition = $("html").scrollTop();
      menuExpanded = true;
      $(".expand-mobile svg").css("transform", "rotate(180deg)");
      $('.main-header').animate({
        top: '0'
      }, 25);
      $('.expand-mobile').animate({
        top: '64px'
      }, 25);
      $(".navigation-sidebar-area").slideDown(200, () => {
        $(".navigation-sidebar-area").css("display", "block");
        $(".wrapper").hide();
      });

    } else {
      menuExpanded = false;
      $(".expand-mobile svg").css("transform", "none");
      $(".wrapper").show();
      $('html, body').animate({
        scrollTop: scrollPosition
      }, 100);
      $(".navigation-sidebar-area").slideUp(500, () => {
        $(".navigation-sidebar-area").css("display", "none");
      });
      $('.main-header').animate({
        top: '0'
      }, 100);
      $('.expand-mobile').animate({
        top: '64px'
      }, 100);
    }
  }); //End .click();

  // Scrolly Header:

  let didScroll;
  let lastScrollTop = 0;
  const delta = .01;
  const mainHeaderHeight = $('.main-header').outerHeight();

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta)
      return;
    if (st > lastScrollTop && st > mainHeaderHeight) {
      //header is up
      $('.main-header').animate({
        top: '-64px'
      }, 100);
      $('.expand-mobile').animate({
        top: '0'
      }, 100);
    } else {
      if (st + $(window).height() < $(document).height()) {
        //header is down
        $('.main-header').animate({
          top: '0'
        }, 150);
        $('.expand-mobile').animate({
          top: '64px'
        }, 150);
      }
    }
    lastScrollTop = st;
  }

  // Scroll Compose Button Appears:
  let idleTime = 0;
  let idleInterval = setInterval(timerIncrement, 100);

  composeFixedButtonHovered = false;
  $(window).scroll(function() {
    idleTime = 0;
    fadeButtonIn();
  });

  $(window).mousemove(() => {
    idleTime = 0;
    fadeButtonIn();
  });

  $(".compose-fixed-button").hover(() => {
    composeFixedButtonHovered = true;
  }).mouseleave(() => {
    composeFixedButtonHovered = false;
  });

  function timerIncrement() {
    idleTime += 100;
    if (idleTime > 3000 && !composeFixedButtonHovered) {
      fadeButtonOut();
    }
  }

  function fadeButtonIn() {
    $(".compose-fixed-button").fadeIn("fast");
  }

  function fadeButtonOut() {
    $(".compose-fixed-button").fadeOut("fast");
  }

  // Create a "... Read More" on small screen displays

  //Note for future: When we're doing grid view to put read more's in.

  readMoreActivated = false;
  var trimmedText = [];
  $(window).on('resize', () => {
    if ($(window).width() < 768) {
      readMore();
    }
    if ($(window).width() > 768) {
      removeReadMore();
    }
  });
  if ($(window).width() < 768) {
    readMore();
  }
  if ($(window).width() > 768) {
    removeReadMore();
  }

  //FUTURE: This should be triggered when switching from Stream to Grid
  function readMore() {
    let trimCount = 0;
    if (!readMoreActivated) {
      $.each($(".post p"), function() {
        var postString = $(this).text();
        var maxLength = 280; // maximum number of characters to extract
        //trim the string to the maximum length
        if (postString.length >= maxLength) {
          var trimmedString1 = postString.slice(0, maxLength);
          //re-trim if we are in the middle of a word
          trimmedString1 = trimmedString1.substr(0, Math.min(trimmedString1.length, trimmedString1.lastIndexOf(" ")));
          var trimmedString2 = postString.slice(trimmedString1.length, (postString.length));
          $(this).empty();
          $(this).text(trimmedString1);
          $(this).append("<div class='read-more-ellipses'> ...</div>");
          $(this).parent().find("button").attr("id", trimCount);
          $(this).parent().find("button").css("display", "block");
          trimmedText[trimCount] = trimmedString2;
          trimCount++;
        }
      });
      // end .each()
      readMoreActivated = true;
    }
  }

  $(".read-more").on("click", function() {
    $(this).parent().find(".read-more-ellipses").remove();
    $(this).parent().find("p").append(trimmedText[$(this).attr('id')]);
    $(this).css("display", "none");
    trimmedText[$(this).attr('id')] = "";
  });

//FUTURE: This should be triggered when switching from Grid to Stream View
  function removeReadMore() {
    if (readMoreActivated) {
      $.each($(".read-more"), function() {
        $(this).parent().find("p").append(trimmedText[$(this).attr('id')]);
        $(this).css("display", "none");
        trimmedText[$(this).attr('id')] = "";
      });
      $.each($(".read-more-ellipses"), function() {
        $(this).remove();
      });
      readMoreActivated = false;
      trimmedText = [];
    }
  }



});
// end document.ready()
