// exports.data = {
//   pagination: {
//     data: "testdata",
//     size: 2
//   },
//   testdata: [
//     "item1",
//     "item2",
//     "item3",
//     "item4"
//   ]
// };

// exports.render = function(data) {
//   return `<ol>
//     ${data.pagination.items.map(function(item) {
//         return `<li>${item}</li>`;
//       }).join("")
//     }
//   </ol>`;
// };

class Test {
  // or `async data() {`
  // or `get data() {`
  data() {
    return {
      name: "Ted",
      layout: "layouts/index.njk",
      // … other front matter keys
    };
  }

  render({name}) {
    // will always be "Ted"
    return `<p>${name}</p>`;
  }
}

module.exports = Test;
