"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchGender = (props) => {
  const searchParams = useSearchParams()
  const [username, setUsername] = useState("");
  const [colors, setColors] = useState(null);
  const [data, setData] = useState(null);
  const [probability, setProbability] = useState(0);
  const [isMale, setIsMale] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const name = searchParams.get("username") || "";
      console.log("sdfdsf",name)

      if (!name) {
        setLoading(false);
        return;
      }

      setUsername(name);

      try {
        const res = await fetch(
          `https://api.genderize.io/?name=${name}`
        );

        const result = await res.json();

        setData(result);

        const prob = Math.round(result.probability * 100);
        const male = result.gender === "male";

        setProbability(prob);
        setIsMale(male);

        const theme = male
          ? {
              avatar: "bg-blue-500",
              pill: "bg-blue-100 text-blue-600",
              bar: "bg-blue-500",
              accuracy: "bg-blue-100",
            }
          : {
              avatar: "bg-pink-500",
              pill: "bg-pink-100 text-pink-600",
              bar: "bg-pink-500",
              accuracy: "bg-pink-100",
            };

        setColors(theme);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [props?.searchParams]);

  /* ---------------- LOADER ---------------- */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
      </div>
    );
  }

  /* ------------ NO NAME CASE ------------ */

  if (!username) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb]">
        <div className="bg-white px-4 py-3 rounded-xl shadow">
          <p className="text-gray-600 text-sm">
            Please provide the name
          </p>
        </div>
      </div>
    );
  }

  /* ------------ ACCURACY UI ------------ */

  const accuracyCal = (accuracy) => {
    if (accuracy <= 20) {
      return "🔴 Very Low Accuracy";
    }

    if (accuracy <= 50) {
      return "🟡 Medium Accuracy";
    }

    return "🟢 Very High Accuracy";
  };

  /* ------------ SAFE NAME ------------ */

  const safeName = data?.name || "";
  const formattedName =
    safeName.charAt(0).toUpperCase() + safeName.slice(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb]">
      <div className="w-[280px] bg-white rounded-2xl shadow-xl p-5 text-center">

        {/* Avatar */}
        <div
          className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-semibold ${colors?.avatar}`}
        >
          {safeName.charAt(0)?.toUpperCase()}
        </div>

        {/* Name */}
        <h2 className="mt-3 text-lg font-semibold text-gray-800">
          {formattedName}
        </h2>

        {/* Gender */}
        <div
          className={`inline-flex items-center gap-2 mt-1 px-3 py-1 rounded-full text-xs font-medium ${colors?.pill}`}
        >
          ● {isMale ? "Male" : "Female"}
        </div>

        {/* Confidence */}
        <div className="mt-5 text-left">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>⭐ Confidence</span>
            <span>{probability}%</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${colors?.bar}`}
              style={{ width: `${probability}%` }}
            />
          </div>
        </div>

        {/* Sample Size */}
        <div className="mt-4 flex justify-between text-xs text-gray-600">
          <span>📊 Data Sample Size</span>
          <span>
            {data?.count?.toLocaleString() || "N/A"}
          </span>
        </div>

        {/* Accuracy */}
        <div
          className={`mt-4 ${colors?.accuracy} text-black text-xs px-3 py-2 rounded-lg flex items-center justify-center`}
        >
          🧠 {accuracyCal(probability)}
        </div>
      </div>
    </div>
  );
};

export default SearchGender;
