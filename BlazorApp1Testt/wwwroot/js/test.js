MYAPP = {
  promptUsers: function () {
    var name = prompt('What is your name?');
  },
};

async function log(text) {
  console.log(text);
}

async function promptUsers1() {
  var name = prompt('What is your name?');
}

async function pie(labels, data) {
  var ctx = document.getElementById('myPieChart')?.getContext('2d');
  if (!ctx) return;

  // Function to generate a deterministic color based on the label
  function getColorFromLabel(label) {
    let hash = 0;
    for (let i = 0; i < label.length; i++) {
      hash = label.charCodeAt(i) + ((hash << 5) - hash);
    }
    const r = (hash & 0xff0000) >> 16;
    const g = (hash & 0x00ff00) >> 8;
    const b = hash & 0x0000ff;
    return `rgb(${r % 256}, ${g % 256}, ${b % 256})`;
  }

  var backgroundColors = labels.map((label) => getColorFromLabel(label)); // Generate deterministic colors

  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: backgroundColors,
        },
      ],
    },
  });
}
