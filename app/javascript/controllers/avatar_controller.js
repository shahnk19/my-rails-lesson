import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = { userName: String };

  connect() {
    this.load();
  }

  load() {
    console.log(this.userNameValue);
    fetch(
      `https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${this.userNameValue}`
    )
      .then((response) => response.text())
      .then((html) => (this.element.innerHTML = html));
  }
}
