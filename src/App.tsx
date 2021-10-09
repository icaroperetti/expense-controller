import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";

import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/tableArea";
import { InfoArea } from "./components/InfoArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Finances Controller</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />

        {/* Insert info Area */}

        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
