const SearchGender = async (props) => {
  const searchParams = await props.searchParams;
  const username = searchParams?.name?.trim();

  if (!username) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb]">
        <div className="bg-white px-4 py-3 rounded-xl shadow">
          <p className="text-gray-600 text-sm">Please provide the name</p>
        </div>
      </div>
    );
  }

  const res = await fetch(`https://api.genderize.io/?name=${username}`);
  const data = await res.json();

  const probability = Math.round(data.probability * 100);
  const isMale = data.gender === "male";

  // ✅ Tailwind-safe color mapping
  const colors = isMale
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

  const accuracyCal = (accuracy) => {
    if (accuracy <= 20) {
      return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-100 text-red-700 text-xs font-medium">
          🔴 Very Low Accuracy
        </div>
      );
    }

    if (accuracy <= 50) {
      return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-yellow-100 text-yellow-700 text-xs font-medium">
          🟡 Medium Accuracy
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-100 text-green-700 text-xs font-medium">
        🟢 Very High Accuracy
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb]">
      <div className="w-[280px] bg-white rounded-2xl shadow-xl p-5 text-center">
        {/* Avatar */}
        <div
          className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-semibold ${colors.avatar}`}
        >
          {data.name?.charAt(0).toUpperCase()}
        </div>

        {/* Name */}
        <h2 className="mt-3 text-lg font-semibold text-gray-800">
          {data.name?.charAt(0).toUpperCase() + data.name.slice(1)}
        </h2>

        {/* Gender pill */}
        <div
          className={`inline-flex items-center gap-2 mt-1 px-3 py-1 rounded-full text-xs font-medium ${colors.pill}`}
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
              className={`h-full rounded-full ${colors.bar}`}
              style={{ width: `${probability}%` }}
            />
          </div>
        </div>

        {/* Sample size */}
        <div className="mt-4 flex justify-between text-xs text-gray-600">
          <span>📊 Data Sample Size</span>
          <span>{data.count?.toLocaleString()}</span>
        </div>

        {/* Accuracy */}
        <div
          className={`mt-4 ${colors.accuracy} text-black text-xs px-3 py-2 rounded-lg flex items-center gap-2 justify-center`}
        >
          🧠 Moderate Accuracy {accuracyCal(probability)}
        </div>
      </div>
    </div>
  );
};

export default SearchGender;
