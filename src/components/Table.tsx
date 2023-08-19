import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

interface postDataType {
    userID: number,
    id: number,
    title: string,
    body: string
}

const Table: React.FC = () => {

    const [ postData, setPostData ] = useState<postDataType[]>([]);
    const [ loading, setLoading ] = useState<Boolean>(true);
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'userId', headerName: 'USER ID', width: 160 },
        { field: 'title', headerName: 'TITLE', width: 560 },
        { field: 'body', headerName: 'BODY', width: 1600 },
    ];

    useEffect(() => {
        const fetchData = async() => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET'});
            const res: postDataType[] = await data.json();
            setPostData(res);
        }
        fetchData()
        setLoading(false);
    }, [])

    return ( !loading &&
        <Box sx={{ height: 480, p: 2}}>
            <DataGrid
                rows={postData}
                columns={columns}
            />
        </Box>
    )
}

export default Table;