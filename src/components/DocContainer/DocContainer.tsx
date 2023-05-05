import React from 'react';
import { dataAPI } from '../../store/services/APIservice';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DocumentationContainer = () => {
  const { data: data } = dataAPI.useFetchAllDataQuery();
  console.log(data?.data.__schema);
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Query: <span>{data?.data.__schema.queryType.name}</span>
        </AccordionSummary>
        <AccordionDetails>
          {data?.data.__schema.types[10].fields?.map((field) => (
            <Accordion key={field.name}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {field.name} : TYPES
              </AccordionSummary>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  Argument: {field.args ? field.args[0].name : ''}
                </AccordionSummary>
              </Accordion>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default DocumentationContainer;
