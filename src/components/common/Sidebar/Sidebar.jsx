import SvgIcon from "../SvgIcon/SvgIcon";
import s from "./Sidebar.module.css";
import equipmentData from "../../../data/equipmentData.json";
import types from "../../../data/types.json";
import { useState } from "react";
import { fetchCampersThunk } from "../../../redux/campers/operations";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/campers/slice";

const locations = [
  "Kyiv, Ukraine",
  "Poltava, Ukraine",
  "Dnipro, Ukraine",
  "Odesa, Ukraine",
  "Kharkiv, Ukraine",
  "Sumy, Ukraine",
  "Lviv, Ukraine",
];

const Sidebar = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedForm, setSelectedForm] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filtered = locations.filter((location) =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredLocations(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleLocationSelect = (location) => {
    setInputValue(location);
    setShowDropdown(false);
  };

  const handleFormChange = (form) => {
    setSelectedForm(form);
  };
  const handleEquipmentChange = (equipment) => {
    setSelectedEquipment((prev) =>
      prev.includes(equipment)
        ? prev.filter((item) => item !== equipment)
        : [...prev, equipment]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {
      location: inputValue,
      form: selectedForm,
      equipment: selectedEquipment,
      page: 1,
      limit: 4,
    };
    dispatch(setFilters(filters));
    dispatch(fetchCampersThunk({ page: 1, limit: 4, ...filters }));
  };

  return (
    <aside className={s.aside}>
      <form onSubmit={handleSubmit}>
        <div className={s.locationContainer}>
          <p className={s.locationName}>Location</p>
          <label className={s.label}>
            <input
              type="text"
              className={s.locationInput}
              placeholder="City"
              value={inputValue}
              onChange={handleInputChange}
            />
            {showDropdown && filteredLocations.length > 0 && (
              <ul className={s.dropdown}>
                {filteredLocations.map((location, index) => (
                  <li
                    key={index}
                    className={s.dropdownItem}
                    onClick={() => handleLocationSelect(location)}
                  >
                    {location}
                  </li>
                ))}
              </ul>
            )}
          </label>
        </div>
        <p className={s.filtersText}>Filters</p>
        <h3 className={s.h3}>Vehicle equipment</h3>
        <div className={s.line}></div>
        <ul className={s.equipmentList}>
          {equipmentData.map((item) => (
            <li key={item.equipment} className={s.listItem}>
              <label className={s.equipmentLabel}>
                <input
                  type="checkbox"
                  name=""
                  className={s.checkbox}
                  onChange={() => handleEquipmentChange(item.equipment)}
                  checked={selectedEquipment.includes(item.equipment)}
                />
                <div className={s.customCheckbox}>
                  <SvgIcon
                    id={item.icon_id}
                    className={s.svgIcon}
                    width="32"
                    height="32"
                    fill={item.fill}
                    stroke={item.stroke}
                  />
                  <p className={s.text}>{item.equipment}</p>
                </div>
              </label>
            </li>
          ))}
        </ul>
        <h3 className={s.h3}>Vehicle type</h3>
        <div className={s.line}></div>
        <ul className={s.equipmentList}>
          {types.map((item) => (
            <li key={item.form} className={s.formListItem}>
              <label className={s.equipmentLabel}>
                <input
                  type="radio"
                  name="form"
                  className={s.checkbox}
                  onChange={() => handleFormChange(item.form)}
                  checked={selectedForm === item.form}
                />
                <div className={s.customCheckbox}>
                  <SvgIcon
                    id={item.icon_id}
                    className={s.svgIcon}
                    width="32"
                    height="32"
                  />
                  <p className={s.text}>{item.form}</p>
                </div>
              </label>
            </li>
          ))}
        </ul>
        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
    </aside>
  );
};

export default Sidebar;
