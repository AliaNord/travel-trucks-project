import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectCurrentPage,
  selectHasMore,
  selectIsLoading,
  selectSelectedFilters,
} from "../../../redux/campers/selectors";
import { useEffect, useRef } from "react";
import { fetchCampersThunk } from "../../../redux/campers/operations";
import CamperCard from "../CamperCard/CamperCard";
import s from "./CamperList.module.css";
import Loader from "../../Loader/Loader";
import { setCurrentPage } from "../../../redux/campers/slice";

const CamperList = () => {
  const hasFetched = useRef(false);
  const data = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const hasMore = useSelector(selectHasMore);
  const currentPage = useSelector(selectCurrentPage);
  const filters = useSelector(selectSelectedFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasFetched.current && !data.length) {
      hasFetched.current = true;
      dispatch(fetchCampersThunk({ page: 1, limit: 4, ...filters }));
    }
  }, [dispatch, data.length, filters]);

  const loadMore = () => {
    if (hasMore) {
      dispatch(setCurrentPage(currentPage + 1));
      dispatch(
        fetchCampersThunk({ page: currentPage + 1, limit: 4, ...filters })
      );
    }
  };

  return (
    <>
      <section className={s.section}>
        {isLoading && (
          <div className={s.loaderContainer}>
            <Loader />
          </div>
        )}
        <ul className={s.ul}>
          {data.map((item) => (
            <CamperCard key={item.id} id={item.id} item={item} />
          ))}
        </ul>
        {hasMore && !isLoading && (
          <button className={s.btn} onClick={loadMore}>
            Load More
          </button>
        )}
      </section>
    </>
  );
};

export default CamperList;
