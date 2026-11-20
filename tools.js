// 道具：どのファイルからも使う関数

// 2つの四角 a と b が重なっていれば true、重なっていなければ false を返す（AABB・６-４）
function aabb(a, b) {
  return a.x < b.x + b.w &&
         a.x + a.w > b.x &&
         a.y < b.y + b.h &&
         a.y + a.h > b.y;
}