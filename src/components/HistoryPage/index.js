import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Pagination from '../Pagination';

function HistoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(4);
  const allWeather = useSelector((state) => state.allWeather);
  const sliceWeatherArr = allWeather.inputList.slice(1);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastData - dataPerPage;
  const currentData = sliceWeatherArr.slice(indexOfFirstPost, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const generateKey = (pre) => `${pre}_${new Date().getTime() + Math.random()}`;

  if (allWeather) {
    return (
      <>
        {
          currentData.map((el) => (
            <div key={generateKey(el[0].name)}>
              <h3 className="text-primary mb-3">{el[0].name}</h3>
              <ul className="list-group nb-4">
                <li className="list-group-item">{el[1].dt_txt}</li>
                <li className="list-group-item">{el[1].main.temp}</li>
              </ul>
            </div>
          ))
        }
        <div className="mt-3">
          <Pagination
            dataPerPage={dataPerPage}
            totalData={sliceWeatherArr.length}
            paginate={paginate}
          />
        </div>
      </>
    );
  }
  return null;
}

export default HistoryPage;
