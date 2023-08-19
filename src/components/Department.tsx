import { useEffect, useState } from 'react'
import Departments from '../utils/Departments.json';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

type departmentType = {
    department: string,
    sub_departments: string[]
}

const SubDepartments: React.FC<departmentType> = (dep) => {
    
    const [ checked, setChecked] = useState<boolean[]>([]);
    const [ allCheck, setAllCheck ] = useState<boolean>(false)
    const [ expanded, setExpanded ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        dep.sub_departments.forEach((_, i) => checked[i] = false);
        setLoading(false);
    }, [])

    const handleAllCheck: () => void = () => {
        checked.fill(!allCheck); 
        setAllCheck(!allCheck);
    }
    const handleCheck: (index: number) => void = (index) => {
        const temp: boolean[] = [...checked];
        temp[index] = !temp[index];
        setChecked(temp);
        setAllCheck(temp.every(e => e));
    }

    return ( !loading &&
        <>  
            <List>
            <Box sx={{display: 'inline-flex', alignItems:'center'}}>
                <span onClick={() => setExpanded(!expanded)}>{expanded ? <ExpandLess/>: <ExpandMore />}</span>
                <Checkbox
                    checked={allCheck}
                    onChange={() => handleAllCheck()}
                />
                <Typography variant="h6" component="div">
                    {dep.department}
                </Typography>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {dep.sub_departments.map((sub, index) => {
                    return (
                        <ListItem key={index} sx={{paddingX: 8}}>
                            <Checkbox
                                checked={checked[index]}
                                onChange={() => handleCheck(index)}
                            />
                            <Typography variant="h6" component="div">
                                {sub}
                            </Typography>
                        </ListItem>
                    )
                })}
            </Collapse>
            </List>
        </>
    )
}

const Department: React.FC = () => {

    return (
        <List >
            { Departments.map((dep, index) => {
                return (
                    <ListItem key={index} >
                        {SubDepartments(dep)}
                    </ListItem>
                )
            })
            }
        </List>
    )
}

export default Department;