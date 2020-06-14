class Cell
  def initialize(value)
    @value = value
  end

  def dead
    @value = 0
  end

  def alive
    @value = 1
  end

  def live_neighbors

  end
end
