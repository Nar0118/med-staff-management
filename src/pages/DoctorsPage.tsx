import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDoctors } from "../redux/actions";
import CustomTable from "../components/CustomTable";

const DoctorsPage: React.FC = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state: any) => state.doctors);

  const handleDelete = (id: number) => {
    dispatch(setDoctors([...doctors].filter((e) => e?.id !== id)));
  };

  return <CustomTable data={doctors} onDelete={handleDelete} loading={false} />;
};

export default DoctorsPage;
