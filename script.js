var globs = {
  cur_page: "default",
  colors: ["red", "yellow", "green", "blue"],
};

function select_page(which) {
  globs.cur_page = which;

  const elem = $(`#index-main-${which}`);

  elem.css("display", "flex");
  elem.siblings().css("display", "none");
}

function main() {
  /** Default page **/

  $("#index-menu-home").click(() => select_page("default"));

  $("#index-main-default").click(homepage_click);

  /** Profile page **/

  $("#index-menu-person").click(
    function () {
      window.location.href = "https://github.com/beaver700nh/";
    }
  );

  /** Menu page **/

  $("#index-menu-burger").click(() => select_page("menu"));

  $("#index-main-menu .hier-expand").click(
    function () {
      $(this).siblings(".hier-nested").toggleClass("hier-nested-active");
      $(this).toggleClass("hier-expanded");
    }
  );

  /** About page **/

  $("#index-main-menu-list-about").click(() => select_page("about"));

  /** Account - GitHub page **/

  $("#index-main-menu-list-accounts-gh").click(() => select_page("acc-gh"));

  /** Account - REPLit page **/

  $("#index-main-menu-list-accounts-repl").click(() => select_page("acc-repl"));

  /** Repo - EEPROMMER3 **/

  $("#index-main-menu-list-noteworthy-e3").click(() => select_page("repo-e3"));

  /** Repo - MLA page **/

  $("#index-main-menu-list-noteworthy-mla").click(() => select_page("repo-mla"));

  /** Repo - Robot page **/

  $("#index-main-menu-list-noteworthy-twr").click(() => select_page("repo-twr"));

  /** Repo - Metaballs page **/

  $("#index-main-menu-list-noteworthy-mrsq").click(() => select_page("repo-mrsq"));

  /** Repo - Video player page **/

  $("#index-main-menu-list-noteworthy-162v").click(() => select_page("repo-162v"));
}

function homepage_click(event) {
  if (homepage_click.is_playing) {
    return;
  }

  homepage_click.is_playing = true;

  play_frame(0, 17, 50, homepage_click);
}

function play_frame(n, max, delay, fn) {
  let color = 0;
  let going_up = true;

  for (let i = n; i >= 0; --i) {
    const elem = $(`#index-main-default > :nth-child(${i})`);

    if (elem) {
      if (0 <= color && color < 4) {
        elem.css("color", `var(--color-${globs.colors[color]}`);
      }
      else {
        elem.css("color", "var(--color-gray-med)");
      }
    }

    if (going_up) {
      ++color;

      if (color === (4 - 1)) going_up = false;
    }
    else if (color >= 0) {
      --color;
    }
  }

  if (n <= max) {
    window.setTimeout(play_frame, delay, n + 1, max, delay, fn);
  }
  else {
    fn.is_playing = false;
  }
}

$(document).ready(main);
