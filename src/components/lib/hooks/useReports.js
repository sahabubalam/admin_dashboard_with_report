import React, {useEffect, useRef, useState} from "react";
import {Button, Input, Menu, Space} from "antd";
import {SearchOutlined} from "@ant-design/icons";


export default function useReports(initialData = [], initialFilterOptions = {}, initialColumns = [] ) {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showColumns, setShowColumns] = useState( Object?.fromEntries(initialColumns?.map(col => [col.dataIndex, true])));

    const [filterOptions, setFilterOptions] = useState(initialFilterOptions);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const searchInput = useRef(null);


    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{marginBottom: 8, display: 'block'}}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{width: 90}}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{width: 90}}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <span style={{backgroundColor: '#ffc069', padding: 0}}>{text}</span>
            ) : (
                text
            ),
    });

    const generateColumns = (columns) =>
        columns.map((col) => ({
            ...col,
            filteredValue: searchedColumn === col.dataIndex ? [searchText] : null,
            render: (text) =>
                searchedColumn === col.dataIndex ? (
                    <span style={{ backgroundColor: '#ffc069', padding: 0 }}>{text}</span>
                ) : (
                    text
                ),
            ...getColumnSearchProps(col.dataIndex),
            visible: showColumns[col.dataIndex],
        }));

    const columns = generateColumns(initialColumns);

    const menu = (
        <Menu>
            {columns.map((col) => (
                <Menu.Item key={col.dataIndex}>
                    <div
                        onClick={(e) => handleMenuItemClick(col.dataIndex, e)}
                        onMouseDown={(e) => e.stopPropagation()} // Prevent focus shift
                    >
                        <input
                            type="checkbox"
                            checked={showColumns[col.dataIndex]}
                            onChange={() => handleCheckboxChange(col.dataIndex)}
                            onClick={(e) => e.stopPropagation()} // Prevent extra toggles
                        />
                        {col.title}
                    </div>
                </Menu.Item>
            ))}
        </Menu>
    );

    const handleMenuItemClick = (dataIndex, e) => {
        e.stopPropagation(); // Prevent the click event from closing the menu
        handleCheckboxChange(dataIndex);
    };
    const handleDropdownClick = (e) => {
        e.stopPropagation(); // Prevent the click event from closing the menu
    };
    const handleCheckboxChange = (dataIndex) => {
        setShowColumns((prev) => ({...prev, [dataIndex]: !prev[dataIndex]}));
    };

    const handleSearchTable = (value) => {
        setSearchText(value);
    };

    const applyFilters = () => {
        const filteredData = initialData.filter((item) =>
            Object.keys(filterOptions).every((key) => {
                const filterValue = filterOptions[key].toLowerCase();
                if (filterValue === '') return true; // No filter applied
                const itemValue = item[key].toString().toLowerCase();
                return itemValue.includes(filterValue);
            })
        );

        setFilteredData(filteredData);
    };

    const resetFilters = () => {
        setFilterOptions(initialFilterOptions);
        setFilteredData(initialData);
    };

    const visibleColumns = columns.filter((col) => col.visible);

    useEffect(() => {
        const filteredData2 = initialData
            .filter((item) =>
                visibleColumns.some(
                    (col) =>
                        item[col.dataIndex].toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1
                )
            )
            .map((item) =>
                Object.keys(item)
                    .filter((key) => visibleColumns.some((col) => col.dataIndex === key))
                    .reduce((acc, key) => {
                        acc[key] = item[key];
                        return acc;
                    }, {})
            );
        setFilteredData(filteredData2)
    }, [searchText])

    return {
        data: initialData,
        filteredData,
        handleDropdownClick,
        handleSearchTable,
        applyFilters,
        resetFilters,
        menu,
        searchText,
        filterOptions,
        setFilterOptions,
        columns,
        visibleColumns,

    };
}