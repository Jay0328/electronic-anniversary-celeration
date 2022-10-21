// https://codepen.io/mathdotrandom/pen/DrJrEr
const max_size = 24;
const max_particles = 1500;
const min_vel = 20;
const max_generation_per_frame = 10;

export function drawLoveCover(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;
  const height = canvas.height;
  const center_y = height / 2;
  const width = canvas.width;
  const center_x = width / 2;
  const particles: Particle[] = [];
  let last = Date.now();
  let now = 0;
  let dt: number;

  function isInsideHeart(x: number, y: number) {
    x = ((x - center_x) / center_x) * 3;
    y = ((y - center_y) / center_y) * -3;
    // Simplest Equation of lurve
    const x2 = x * x;
    const y2 = y * y;
    // Simplest Equation of lurve

    return Math.pow(x2 + y2 - 1, 3) - x2 * (y2 * y) < 0;
  }

  function random(size: number, freq: number) {
    let val = 0;
    let iter = freq;

    do {
      size /= iter;
      iter += freq;
      val += size * Math.random();
    } while (size >= 1);

    return val;
  }

  interface Particle {
    draw(): void;
    move(dt: number): void;
  }

  function createParticle(): Particle {
    let x = center_x;
    let y = center_y;
    const size = ~~random(max_size, 2.4);
    let x_vel =
      (max_size + min_vel - size) / 2 -
      Math.random() * (max_size + min_vel - size);
    let y_vel =
      (max_size + min_vel - size) / 2 -
      Math.random() * (max_size + min_vel - size);
    let nx = x;
    let ny = y;
    let r: number, g: number, b: number;
    const a = 0.05 * size;

    return {
      draw() {
        r = ~~(255 * (x / width));
        g = ~~(255 * (1 - y / height));
        b = ~~(255 - r);
        ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      },
      move(dt) {
        nx += x_vel * dt;
        ny += y_vel * dt;
        if (!isInsideHeart(nx, ny)) {
          if (!isInsideHeart(nx, y)) {
            x_vel *= -1;
            return;
          }

          if (!isInsideHeart(x, ny)) {
            y_vel *= -1;
            return;
          }
          // Lets do the crazy furbidden
          x_vel = -1 * y_vel;
          y_vel = -1 * x_vel;
          return;
        }

        x = nx;
        y = ny;
      },
    };
  }

  function movementTick() {
    const len = particles.length;
    const dead = max_particles - len;
    for (let i = 0; i < dead && i < max_generation_per_frame; i++) {
      particles.push(createParticle());
    }

    // Update the date
    now = Date.now();
    dt = last - now;
    dt /= 1000;
    last = now;
    particles.forEach(function (p) {
      p.move(dt);
    });
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(function (p) {
      p.draw();
    });

    requestAnimationFrame(tick);
  }

  setInterval(movementTick, 16);
  tick();
}
