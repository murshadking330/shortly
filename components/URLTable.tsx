"use client";

import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function URLTable() {
  const { data } = useSWR("/api/list", fetcher);

  if (!data) return <p className="text-center text-gray-400">Loading...</p>;

  return (
    <div className="overflow-x-auto bg-[#0b0c0f] p-4 rounded-lg shadow">
      <table className="w-full text-left">
        <thead className="text-gray-400 text-sm">
          <tr>
            <th className="py-2">Short Link</th>
            <th className="py-2">Original</th>
            <th className="py-2">Clicks</th>
            <th className="py-2">Created</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: any) => (
            <tr key={item.id} className="border-t border-gray-800">
              <td className="py-3 text-sm">
                <a className="underline" href={`/${item.shortId}`}>{window.location.origin}/{item.shortId}</a>
              </td>
              <td className="py-3 text-sm text-gray-300 truncate max-w-md">{item.url}</td>
              <td className="py-3 text-sm">{item.clicks}</td>
              <td className="py-3 text-sm text-gray-400">{new Date(item.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
