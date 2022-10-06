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
    () => {
      window.location.href = "https://github.com/beaver700nh/";
    }
  );
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
