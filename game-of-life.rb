board = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

n = 0

while n < 1
  board.map!.with_index do |line, row|
    line.map!.with_index do |cell, col|
      adjacent_cell_coors = [[row - 1, col - 1],
                             [row - 1, col],
                             [row - 1, col + 1],
                             [row, col - 1],
                             [row, col + 1],
                             [row + 1, col - 1],
                             [row + 1, col],
                             [row + 1, col + 1]]
      live_neighbors = 0
      adjacent_cell_coors.each do |adj_cell_coor|
        if adj_cell_coor[0].positive? && adj_cell_coor[1].positive? && (adj_cell_coor[0] < 5) && (adj_cell_coor[1] < 10)
          live_neighbors += 1 if (board[adj_cell_coor[0]][adj_cell_coor[1]] == 1)
        end
      end
      if cell == 1 && ((live_neighbors < 2) || (live_neighbors > 3))
        cell = 0
      elsif cell == 0 && (live_neighbors == 3)
        cell = 1
      end
      col += 1
      cell
    end
    col = 0
    row += 1
    line
  end
  n += 1
p board
end
