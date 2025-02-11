
function Tabel({ data }) {
    return (
        <div className='tabel'>
            <table className="border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-500 p-2 text-center">FirstName</th>
                        <th className="border border-gray-500 p-2">LastName</th>
                        <th className="border border-gray-500 p-2">Email</th>
                        <th className="border border-gray-500 p-2">Phone</th>
                        <th className="border border-gray-500 p-2">Department</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, key) => {
                        return (
                            <tr key={key}>
                                <td className="border border-gray-500 p-2 text-center">{value.firstName}</td>
                                <td className="border border-gray-500 p-2 text-center">{value.lastName}</td>
                                <td className="border border-gray-500 p-2 text-center">{value.email}</td>
                                <td className="border border-gray-500 p-2 text-center">{value.phone}</td>
                                <td className="border border-gray-500 p-2 text-center">{value.department}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Tabel