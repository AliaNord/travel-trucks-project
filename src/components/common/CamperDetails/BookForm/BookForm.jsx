import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useCallback, useState } from "react";
// import { DayPicker } from "react-day-picker";
import toast from "react-hot-toast";
import s from "./BookForm.module.css";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookForm = () => {
  const [selected, setSelected] = useState();
  const [showPicker, setShowPicker] = useState(false);

  const validateFormSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Too short")
      .max(20, "Too much chars"),
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^[A-Za-z0-9!#$%&.'*+/=?^_{|}~-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Invalid email format"
      ),
    date: Yup.string().required("Date is required"),
    comment: Yup.string(),
  });

  const toggleDateInput = useCallback(() => {
    setShowPicker((prev) => !prev);
  }, []);

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      date: "",
      comment: "",
    },
    resolver: yupResolver(validateFormSchema),
    mode: "onChange",
  });

  const onSubmit = () => {
    toast.promise(new Promise((resolve) => setTimeout(resolve, 3000)), {
      loading: "Booking...",
      success: <b>Booked!</b>,
      error: <b>Something went wrong...</b>,
    });
    setSelected();
    reset();
  };

  return (
    <div className={s.formContainer}>
      <h3 className={s.h3}>Book your campervan now</h3>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={s.label}>
            <input
              {...register("name")}
              className={s.input}
              placeholder="Name*"
            />
            {errors.name && (
              <div className={s.error}>{errors.name.message}</div>
            )}
          </label>
        </div>
        <div>
          <label className={s.label}>
            <input
              {...register("email")}
              className={s.input}
              placeholder="Email*"
            />
            {errors.email && (
              <div className={s.error}>{errors.email.message}</div>
            )}
          </label>
        </div>
        <div>
          <label className={s.label}>
            <input
              {...register("date")}
              placeholder="Booking date*"
              className={s.input}
              readOnly
              value={selected ? selected.toLocaleDateString() : ""}
              onClick={(e) => {
                e.stopPropagation();
                setShowPicker((prev) => !prev);
              }}
            />
            {showPicker && (
              <div
                className={s.dateWrapper}
                onClick={(e) => e.stopPropagation()}
              >
                <DatePicker
                  selected={selected}
                  selectsStart
                  inline
                  onChange={(date) => {
                    setSelected(date);
                    setValue("date", date ? date.toLocaleDateString() : "");
                    toggleDateInput();
                  }}
                />
              </div>
            )}
            {errors.date && (
              <div className={s.error}>{errors.date.message}</div>
            )}
          </label>
        </div>
        <div>
          <textarea
            {...register("comment")}
            className={s.textarea}
            placeholder="Comment"
          ></textarea>
        </div>
        <button
          type="submit"
          className={`${s.btn} ${!isValid ? s.btnInvalid : ""}`}
          disabled={!isValid}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default BookForm;
