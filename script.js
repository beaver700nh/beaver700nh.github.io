function select_page(which) {
  const elem = $(`#index-main-${which}`);

  elem.css("display", "flex");
  elem.siblings().css("display", "none");
}

function main() {
  $("#index-menu-home").click(() => select_page("default"));

  $("#index-menu-person").click(
    () => {
      window.location.href = "https://github.com/beaver700nh/";
    }
  );
}

$(document).ready(main);
