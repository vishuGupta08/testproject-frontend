import React, { useState, useEffect } from 'react'

import axios from 'axios'
// import classes from '../../containers/District/District.css'

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






function ReportTwo(props) {
    const [report, setReport] = useState([]);
    // state = {
    //     msg: "",
    //     report: []
    // }


    useEffect(() => {
        let { id } = props.match.params
        let fetchedReport = []
        axios.get('http://localhost:8080/children/try2/' + id, {
            headers: {
                'token': sessionStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                response.data.forEach((el) => {
                    fetchedReport.push(el)
                })
                setReport(fetchedReport)

                // this.setState({ report: fetchedReport })
            })
            .catch(error => {
                console.log(error)
            })
    }, []);


    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" >District</TableCell>
                        <TableCell align="center" strong>Number of Children</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {report.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="center" component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.number_of_children}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        // <Aux>
        //     {
        //         this.state.report ? this.state.report.map(el => {
        //             return (<div className={classes.Card}>
        //                 <h5>District-{el.name}, Number of Children-{el.number_of_children}</h5>
        //             </div>
        //             )
        //         }) : null
        //     }
        // </Aux>
    )



}
export default ReportTwo




