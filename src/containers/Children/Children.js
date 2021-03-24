import React, { useState, useEffect } from 'react'
import Children from '../../component/Children/Children'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import Button from '../../component/UI/Button/Button'
import Aux from '../../hoc/auxi'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function children(props) {
    const [report, setReport] = useState(0);
    const [error, setError] = useState(0);
    const [form, setForm] = useState(0);
    const [children, setChildren] = useState([]);


    useEffect(() => {

        let fetchedChildren = []
        axios.get('http://localhost:8080/children', {
            headers: {
                'token': sessionStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                response.data.forEach((el) => {
                    fetchedChildren.push(el)
                })
                setChildren(fetchedChildren)


            })
            .catch(error => {
                setError(true)
            })
    }, []);


    const createChildHandler = (event) => {
        // event.preventDefault();
        console.log('clicked')
        setForm(1)

    }

    const reportHandler = (event) => {
        console.log('clicked')
        setReport(1)
    }

    const classes = useStyles();
    return (
        <Aux>
            <Button btnType="Success" clicked={createChildHandler}>Add New Child</Button>
            <Button btnType="Danger" clicked={reportHandler}>Report</Button>
            {
                error ? <Redirect to='/auth' /> :

                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" >Name</TableCell>
                                    <TableCell align="center" strong>Gender</TableCell>
                                    <TableCell align="center" strong>Mother Name</TableCell>
                                    <TableCell align="center" strong>Father Name</TableCell>
                                    <TableCell align="center" strong>Date of Birth</TableCell>
                                    <TableCell align="center" strong>State</TableCell>
                                    <TableCell align="center" strong>District</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {children.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell align="center" component="th" scope="row">
                                            <Link to={`/childDetail/${row._id}`}>  {row.name}</Link>
                                        </TableCell>
                                        <TableCell align="center">{row.gender}</TableCell>
                                        <TableCell align="center">{row.motherName}</TableCell>
                                        <TableCell align="center">{row.fatherName}</TableCell>
                                        <TableCell align="center">{row.dob}</TableCell>
                                        <TableCell align="center">{row.state.name}</TableCell>
                                        <TableCell align="center">{row.district.name}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                // children.map(child =>
                //     (<Children details={child} />)
                // )

            }
            {
                form ? <Redirect to='/newchild' /> : null
            }
            {
                report ? <Redirect to='/report' /> : null
            }

        </Aux>
    )

}

export default children














// function ReportTwo(props) {
//     const [report, setReport] = useState([]);
//     // state = {
//     //     msg: "",
//     //     report: []
//     // }


//     useEffect(() => {
//         let { id } = props.match.params
//         let fetchedReport = []
//         axios.get('http://localhost:8080/children/try2/' + id, {
//             headers: {
//                 'token': sessionStorage.getItem('token')
//             }
//         })
//             .then(response => {
//                 console.log(response.data)
//                 response.data.forEach((el) => {
//                     fetchedReport.push(el)
//                 })
//                 setReport(fetchedReport)

//                 // this.setState({ report: fetchedReport })
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }, []);


//     const classes = useStyles();
//     return (
        // <TableContainer component={Paper}>
        //     <Table className={classes.table} aria-label="simple table">
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell align="center" >District</TableCell>
        //                 <TableCell align="center" strong>Number of Children</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {report.map((row) => (
        //                 <TableRow key={row.name}>
        //                     <TableCell align="center" component="th" scope="row">
        //                         {row.name}
        //                     </TableCell>
        //                     <TableCell align="center">{row.number_of_children}</TableCell>
        //                 </TableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        // </TableContainer>
//       
//     )



// }
// export default ReportTwo




