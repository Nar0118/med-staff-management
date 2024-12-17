import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomTable from "../components/CustomTable";
import { setNurses } from "../redux/actions";

const NursesPage: React.FC = () => {
  const dispatch = useDispatch();
  const nurses = useSelector((state: any) => state.nurses);

  const handleDelete = (id: number) => {
    dispatch(setNurses([...nurses].filter((e) => e?.id !== id)));
  };

  return <CustomTable data={nurses} onDelete={handleDelete} loading={false} />;
};

export default NursesPage;
