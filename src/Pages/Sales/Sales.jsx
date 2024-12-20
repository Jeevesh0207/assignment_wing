import React, { useState, useMemo } from "react";
import {
  BarChart2,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
} from "lucide-react";

import { Arrow45Svg } from "../../svg";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Input,
  Select,
  SelectItem,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableCaption,
  TableHead,
  TableCell,
} from "@/components/ui/table";

import img_logo from "../../img/image.jpg";
import { Header } from "../../components";

const formatTimeSpent = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours > 0 ? `${hours}h ` : ""}${mins}m`;
};

const Sales = () => {
  const navigation = useNavigate();
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState("productName");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const toggleProduct = (info) => {
    navigation("/chats", { state: info });
  };

  const data = [
    {
      productName: "Wireless Headphones",
      date: "2024-12-01",
      timeSpent: 150,
      orderValue: 120,
      commission: 12,
      message:
        "Product: Wireless Headphones, Price: 120, Date: 2024-12-01, Order Value: 120, Commission: 12",
    },
    {
      productName: "Smart Watch",
      date: "2024-12-01",
      timeSpent: 200,
      orderValue: 200,
      commission: 20,
      message:
        "Product: Smart Watch, Price: 200, Date: 2024-12-01, Order Value: 200, Commission: 20",
    },
    {
      productName: "Gaming Mouse",
      date: "2024-12-02",
      timeSpent: 100,
      orderValue: 50,
      commission: 5,
      message:
        "Product: Gaming Mouse, Price: 50, Date: 2024-12-02, Order Value: 50, Commission: 5",
    },
    {
      productName: "Laptop",
      date: "2024-12-02",
      timeSpent: 250,
      orderValue: 800,
      commission: 80,
      message:
        "Product: Laptop, Price: 800, Date: 2024-12-02, Order Value: 800, Commission: 80",
    },
    {
      productName: "Smartphone",
      date: "2024-12-03",
      timeSpent: 300,
      orderValue: 600,
      commission: 60,
      message:
        "Product: Smartphone, Price: 600, Date: 2024-12-03, Order Value: 600, Commission: 60",
    },
    {
      productName: "Bluetooth Speaker",
      date: "2024-12-03",
      timeSpent: 120,
      orderValue: 60,
      commission: 6,
      message:
        "Product: Bluetooth Speaker, Price: 60, Date: 2024-12-03, Order Value: 60, Commission: 6",
    },
    {
      productName: "Smart TV",
      date: "2024-12-04",
      timeSpent: 400,
      orderValue: 1000,
      commission: 100,
      message:
        "Product: Smart TV, Price: 1000, Date: 2024-12-04, Order Value: 1000, Commission: 100",
    },
    {
      productName: "Digital Camera",
      date: "2024-12-04",
      timeSpent: 220,
      orderValue: 500,
      commission: 50,
      message:
        "Product: Digital Camera, Price: 500, Date: 2024-12-04, Order Value: 500, Commission: 50",
    },
    {
      productName: "Headphone Stand",
      date: "2024-12-05",
      timeSpent: 80,
      orderValue: 30,
      commission: 3,
      message:
        "Product: Headphone Stand, Price: 30, Date: 2024-12-05, Order Value: 30, Commission: 3",
    },
    {
      productName: "Electric Kettle",
      date: "2024-12-05",
      timeSpent: 180,
      orderValue: 40,
      commission: 4,
      message:
        "Product: Electric Kettle, Price: 40, Date: 2024-12-05, Order Value: 40, Commission: 4",
    },
    {
      productName: "Smart Home Hub",
      date: "2024-12-06",
      timeSpent: 280,
      orderValue: 150,
      commission: 15,
      message:
        "Product: Smart Home Hub, Price: 150, Date: 2024-12-06, Order Value: 150, Commission: 15",
    },
    {
      productName: "Fitness Tracker",
      date: "2024-12-06",
      timeSpent: 140,
      orderValue: 80,
      commission: 8,
      message:
        "Product: Fitness Tracker, Price: 80, Date: 2024-12-06, Order Value: 80, Commission: 8",
    },
    {
      productName: "Gaming Chair",
      date: "2024-12-07",
      timeSpent: 350,
      orderValue: 250,
      commission: 25,
      message:
        "Product: Gaming Chair, Price: 250, Date: 2024-12-07, Order Value: 250, Commission: 25",
    },
    {
      productName: "Portable Charger",
      date: "2024-12-07",
      timeSpent: 60,
      orderValue: 25,
      commission: 2.5,
      message:
        "Product: Portable Charger, Price: 25, Date: 2024-12-07, Order Value: 25, Commission: 2.5",
    },
    {
      productName: "Noise Cancelling Headphones",
      date: "2024-12-08",
      timeSpent: 190,
      orderValue: 150,
      commission: 15,
      message:
        "Product: Noise Cancelling Headphones, Price: 150, Date: 2024-12-08, Order Value: 150, Commission: 15",
    },
    {
      productName: "Smartphone Case",
      date: "2024-12-08",
      timeSpent: 100,
      orderValue: 15,
      commission: 1.5,
      message:
        "Product: Smartphone Case, Price: 15, Date: 2024-12-08, Order Value: 15, Commission: 1.5",
    },
    {
      productName: "4K Monitor",
      date: "2024-12-09",
      timeSpent: 400,
      orderValue: 700,
      commission: 70,
      message:
        "Product: 4K Monitor, Price: 700, Date: 2024-12-09, Order Value: 700, Commission: 70",
    },
    {
      productName: "External SSD",
      date: "2024-12-09",
      timeSpent: 250,
      orderValue: 120,
      commission: 12,
      message:
        "Product: External SSD, Price: 120, Date: 2024-12-09, Order Value: 120, Commission: 12",
    },
    {
      productName: "Electric Scooter",
      date: "2024-12-10",
      timeSpent: 500,
      orderValue: 1000,
      commission: 100,
      message:
        "Product: Electric Scooter, Price: 1000, Date: 2024-12-10, Order Value: 1000, Commission: 100",
    },
    {
      productName: "Smart Light Bulbs",
      date: "2024-12-10",
      timeSpent: 150,
      orderValue: 60,
      commission: 6,
      message:
        "Product: Smart Light Bulbs, Price: 60, Date: 2024-12-10, Order Value: 60, Commission: 6",
    },
  ];

  const filteredAndSortedData = useMemo(() => {
    const filterData = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(filter.toLowerCase())
      )
    );
    return filterData.sort((a, b) => {
      const valA = a[sortKey],
        valB = b[sortKey];
      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filter, sortKey, sortOrder]);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return filteredAndSortedData.slice(startIndex, startIndex + pageSize);
  }, [filteredAndSortedData, page, pageSize]);

  const totalPages = Math.ceil(filteredAndSortedData.length / pageSize);

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const SortIcon = ({ columnKey }) => {
    return columnKey !== sortKey ? (
      <ChevronsUpDown className="h-4 w-4 ml-2" />
    ) : sortOrder === "asc" ? (
      <ChevronUp className="h-4 w-4 ml-2" />
    ) : (
      <ChevronDown className="h-4 w-4 ml-2" />
    );
  };

  return (
    <div
      className="w-full overflow-scroll no-scrollbar p-5 box-border"
      style={{ height: "100vh" }}
    >
      <Header />
      <div className="p-5 box-border overflow-scroll rounded-lg mt-5 no-scrollbar border-[0.5px] border-gray shadow shadow-gray">
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
          <h1 className="text-[17px] md:text-[23px]">Sales</h1>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <Input
            placeholder="Filter products..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="max-w-sm mb-2 md:mb-0"
          />
          <Select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="w-[180px] relative mb-2 md:mb-0"
          >
            <SelectItem value={5}>5 per page</SelectItem>
            <SelectItem value={10}>10 per page</SelectItem>
            <SelectItem value={20}>20 per page</SelectItem>
          </Select>
        </div>
        <Table className="w-full rounded-md overflow-hidden mt-5 mb-5 no-scrollbar">
          <TableHeader>
            <TableRow className="w-full h-20 bg-gray overflow-x-scroll no-scrollbar">
              {[
                "productName",
                "date",
                "timeSpent",
                "orderValue",
                "commission",
              ].map((key) => (
                <TableHead key={key}>
                  <button
                    className="flex items-center"
                    onClick={() => handleSort(key)}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    <SortIcon columnKey={key} />
                  </button>
                </TableHead>
              ))}
              <TableHead className="w-auto ">Chat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="w-auto font-medium flex items-center">
                  <img src={img_logo} className="w-[35px] h-[35px] mr-3" />
                  {item.productName}
                </TableCell>
                <TableCell>
                  {item.date}
                  <p className="font-normal text-colors_03 text-[13px] mt-1">
                    10:24 AM
                  </p>
                </TableCell>
                <TableCell>{formatTimeSpent(item.timeSpent)}</TableCell>
                <TableCell className="text-left">
                  ${item.orderValue.toFixed(2)}
                </TableCell>
                <TableCell className="text-left font-semibold">
                  ${item.commission.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-[120px]"
                    onClick={() => toggleProduct(item.message)}
                  >
                    <p className="mr-2 text-[12px]">View Chat</p>
                    <Arrow45Svg />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="bg-gray">
            <TableRow className="text-black">
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell className="text-right">
                $
                {filteredAndSortedData
                  .reduce((sum, item) => sum + item.orderValue, 0)
                  .toFixed(2)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center ">
          <div className="text-[14px]">
            Showing {(page - 1) * pageSize + 1} to{" "}
            {Math.min(page * pageSize, filteredAndSortedData.length)} of{" "}
            {filteredAndSortedData.length} entries
          </div>
          <div className="space-x-2">
            <Button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-8 py-3 bg-slate-100"
            >
              Previous
            </Button>
            <Button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-8 py-3 bg-black text-white"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
