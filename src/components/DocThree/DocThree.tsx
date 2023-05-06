import { IType } from '../../store/services/schemaType';

import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { alpha, styled } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem';
import Collapse from '@mui/material/Collapse';
import { useSpring, animated } from '@react-spring/web';
import { TransitionProps } from '@mui/material/transitions';

function MinusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props: SvgIconProps) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(20px,0,0)',
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const StyledTreeItem = styled((props: TreeItemProps) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

const findArg = (types: Array<IType>, arg: string = '', name: string = '') => {
  if (arg === 'code') return 'ID';
  const ans = types.find((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(name.slice(0, name.length - 1) + 'filter');
  });
  if (ans) return ans.name;
  return '';
};

const findType = (types: Array<IType>, type: string) => {};

const DocTreeView: React.FC<{
  types: Array<IType>;
  name: string;
}> = ({ types, name }) => {
  console.log(types);
  return (
    <TreeView
      aria-label="customized"
      defaultExpanded={['1']}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<CloseSquare />}
      sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <StyledTreeItem nodeId="0" label={name}>
        <StyledTreeItem nodeId={'1'} label={types[10].fields[0].name}>
          <StyledTreeItem nodeId={'1.1'} label={`type -> ${types[1].name}`}>
            <StyledTreeItem nodeId={'1.1.1'} label={`code:${types[6].name}!`}>
              <StyledTreeItem
                nodeId={'1.1.1.1'}
                label={types[6].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'1.1.2'}
              label={`Countries:[${types[3].name}!]!`}
            >
              <StyledTreeItem
                nodeId={'1.1.2.1'}
                label={`find for the  field "Country" in the root element`}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem nodeId={'1.1.3'} label={`name:${types[12].name}`}>
              <StyledTreeItem
                nodeId={'1.1.3.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
          </StyledTreeItem>
          <StyledTreeItem
            nodeId={'1.2'}
            label={`argument -> code:${types[6].name}`}
          >
            <StyledTreeItem
              nodeId={'1.2.1'}
              label={types[6].description}
            ></StyledTreeItem>
          </StyledTreeItem>
        </StyledTreeItem>
        <StyledTreeItem nodeId={'2'} label={types[10].fields[1].name}>
          <StyledTreeItem nodeId={'2.1'} label={`type -> [${types[1].name}!]!`}>
            <StyledTreeItem nodeId={'2.1.1'} label={`code:${types[6].name}!`}>
              <StyledTreeItem
                nodeId={'2.1.1.1'}
                label={types[6].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'2.1.2'}
              label={`Countries:[${types[3].name}!]!`}
            >
              <StyledTreeItem
                nodeId={'2.1.2.1'}
                label={`find for the  field "Country" in the root element`}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem nodeId={'2.1.3'} label={`name:${types[12].name}`}>
              <StyledTreeItem
                nodeId={'2.1.3.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
          </StyledTreeItem>
          <StyledTreeItem
            nodeId={'2.2'}
            label={`filter: ${types[2].name} = {}`}
          >
            <StyledTreeItem nodeId={'2.2.1'} label={`code: ${types[13].name}`}>
              <StyledTreeItem nodeId={'2.2.1.1'} label={`eq:${types[12].name}`}>
                <StyledTreeItem
                  nodeId={'2.2.1.1.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'2.2.1.2'}
                label={`in:[${types[12].name}!]`}
              >
                <StyledTreeItem
                  nodeId={'2.2.1.2.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem nodeId={'2.2.1.3'} label={`ne:${types[12].name}`}>
                <StyledTreeItem
                  nodeId={'2.2.1.3.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'2.2.1.4'}
                label={`nin:[${types[12].name}!]`}
              >
                <StyledTreeItem
                  nodeId={'2.2.1.4.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'2.2.1.5'}
                label={`regex:${types[12].name}`}
              >
                <StyledTreeItem
                  nodeId={'2.2.1.5.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
            </StyledTreeItem>
          </StyledTreeItem>
        </StyledTreeItem>
        <StyledTreeItem nodeId={'3'} label={types[10].fields[2].name}>
          <StyledTreeItem
            nodeId={'3.1'}
            label={`type -> [${types[10].fields[3].name}!]!`}
          >
            <StyledTreeItem
              nodeId={'3.1.1'}
              label={`${types[3].fields[0].name}: String!`}
            >
              <StyledTreeItem
                nodeId={'3.1.1.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.2'}
              label={`${types[3].fields[1].name}: String`}
            >
              <StyledTreeItem
                nodeId={'3.1.2.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.3'}
              label={`${types[3].fields[2].name}: ID!`}
            >
              <StyledTreeItem
                nodeId={'3.1.3.1'}
                label={types[6].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.4'}
              label={`${types[3].fields[3].name}: Continent!`}
            >
              <StyledTreeItem
                nodeId={'3.1.4.1'}
                label={`find for the  field "Continent" in the root element`}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.5'}
              label={`${types[3].fields[4].name}: [String!]!`}
            >
              <StyledTreeItem
                nodeId={'3.1.5.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.6'}
              label={`${types[3].fields[5].name}: String`}
            >
              <StyledTreeItem
                nodeId={'3.1.6.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.7'}
              label={`${types[3].fields[6].name}: String!`}
            >
              <StyledTreeItem
                nodeId={'3.1.7.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.8'}
              label={`${types[3].fields[7].name}: String!`}
            >
              <StyledTreeItem
                nodeId={'3.1.8.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.9'}
              label={`${types[3].fields[8].name}: [Language!]!`}
            >
              <StyledTreeItem
                nodeId={'3.1.9.1'}
                label={`${types[8].fields[0].name}: ${types[6].name}!`}
              >
                <StyledTreeItem
                  nodeId={'3.1.9.1.1'}
                  label={types[6].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'3.1.9.2'}
                label={`${types[8].fields[1].name}: ${types[12].name}!`}
              >
                <StyledTreeItem
                  nodeId={'3.1.9.2.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'3.1.9.3'}
                label={`${types[8].fields[2].name}: ${types[12].name}!`}
              >
                <StyledTreeItem
                  nodeId={'3.1.9.3.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'3.1.9.4'}
                label={`${types[8].fields[1].name}: ${types[0].name}!`}
              >
                <StyledTreeItem
                  nodeId={'3.1.9.4.1'}
                  label={types[0].description}
                ></StyledTreeItem>
              </StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.10'}
              label={`${types[3].fields[9].name}(lang:String): String!`}
            >
              <StyledTreeItem
                nodeId={'3.1.10.1'}
                label={`type -> ${types[12].name}`}
              >
                <StyledTreeItem
                  nodeId={'3.1.10.1.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'3.1.10.2'}
                label={`argument -> lang:${types[12].name}`}
              >
                <StyledTreeItem
                  nodeId={'3.1.10.2.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.11'}
              label={`${types[3].fields[10].name}: String!`}
            >
              <StyledTreeItem
                nodeId={'3.1.11.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.12'}
              label={`${types[3].fields[11].name}: String!`}
            >
              <StyledTreeItem
                nodeId={'3.1.12.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.13'}
              label={`${types[3].fields[12].name}: [String!]!`}
            >
              <StyledTreeItem
                nodeId={'3.1.13.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.14'}
              label={`${types[3].fields[13].name}: [State!]!`}
            >
              <StyledTreeItem
                nodeId={'3.1.14.1'}
                label={`code: ${types[12].name}`}
              >
                <StyledTreeItem
                  nodeId={'3.1.14.1.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'3.1.14.2'}
                label={`country:${types[3].name}!`}
              >
                <StyledTreeItem
                  nodeId={'3.1.14.2.1'}
                  label={`find for the  field "Country" in the root element`}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'3.1.14.3'}
                label={`name: ${types[12].name}!`}
              >
                <StyledTreeItem
                  nodeId={'3.1.14.3.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'3.1.15'}
              label={`${types[3].fields[14].name}: [Subdivision!]!`}
            >
              <StyledTreeItem
                nodeId={'3.1.15.1'}
                label={`code: ${types[6].name}`}
              >
                <StyledTreeItem
                  nodeId={'3.1.15.1.1'}
                  label={types[6].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'3.1.15.2'}
                label={`emoji: ${types[12].name}`}
              >
                <StyledTreeItem
                  nodeId={'3.1.15.2.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'3.1.15.3'}
                label={`name: ${types[12].name}!`}
              >
                <StyledTreeItem
                  nodeId={'3.1.15.3.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
            </StyledTreeItem>
          </StyledTreeItem>
          <StyledTreeItem
            nodeId={'3.2'}
            label={`filter -> ${types[4].name} = {}`}
          >
            <StyledTreeItem
              nodeId={'3.2.2'}
              label={`arg -> filter:${types[4].name} = {}`}
            >
              <StyledTreeItem
                nodeId={'3.2.2.1'}
                label={`code:${types[13].name}`}
              >
                <StyledTreeItem
                  nodeId={'3.2.2.1.1'}
                  label={`eq:${types[12].name}`}
                >
                  {' '}
                  <StyledTreeItem
                    nodeId={'3.2.2.1.1.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId={'3.2.2.1.2'}
                  label={`in:[${types[12].name}!]`}
                >
                  <StyledTreeItem
                    nodeId={'3.2.2.1.2.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId={'3.2.2.1.3'}
                  label={`ne:${types[12].name}`}
                >
                  <StyledTreeItem
                    nodeId={'3.2.2.1.3.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId={'3.2.2.1.4'}
                  label={`nin:[${types[12].name}!]`}
                >
                  <StyledTreeItem
                    nodeId={'3.2.2.1.4.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId={'3.2.2.1.5'}
                  label={`regex:${types[12].name}`}
                >
                  <StyledTreeItem
                    nodeId={'3.2.2.1.5.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'3.2.2.2'}
                label={`continent:${types[13].name}`}
              >
                <StyledTreeItem
                  nodeId={'3.2.2.2.1'}
                  label={`eq:${types[12].name}`}
                >
                  {' '}
                  <StyledTreeItem
                    nodeId={'3.2.2.2.1.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId={'3.2.2.2.2'}
                  label={`in:[${types[12].name}!]`}
                >
                  <StyledTreeItem
                    nodeId={'3.2.2.2.2.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId={'3.2.2.2.3'}
                  label={`ne:${types[12].name}`}
                >
                  <StyledTreeItem
                    nodeId={'3.2.2.2.3.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId={'3.2.2.2.4'}
                  label={`nin:[${types[12].name}!]`}
                >
                  <StyledTreeItem
                    nodeId={'3.2.2.2.4.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId={'3.2.2.2.5'}
                  label={`regex:${types[12].name}`}
                >
                  <StyledTreeItem
                    nodeId={'3.2.2.2.5.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'3.2.2.3'}
                label={`currency:${types[13].name}`}
              >
                <StyledTreeItem
                  nodeId={'3.2.2.3.1'}
                  label={`eq:${types[12].name}`}
                >
                  {' '}
                  <StyledTreeItem
                    nodeId={'3.2.2.3.1.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId={'3.2.2.3.2'}
                  label={`in:[${types[12].name}!]`}
                >
                  <StyledTreeItem
                    nodeId={'3.2.2.3.2.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId={'3.2.2.3.3'}
                  label={`ne:${types[12].name}`}
                >
                  <StyledTreeItem
                    nodeId={'3.2.2.3.3.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId={'3.2.2.3.4'}
                  label={`nin:[${types[12].name}!]`}
                >
                  <StyledTreeItem
                    nodeId={'3.2.2.3.4.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId={'3.2.2.3.5'}
                  label={`regex:${types[12].name}`}
                >
                  <StyledTreeItem
                    nodeId={'3.2.2.3.5.1'}
                    label={types[12].description}
                  ></StyledTreeItem>
                </StyledTreeItem>
              </StyledTreeItem>
            </StyledTreeItem>
          </StyledTreeItem>
        </StyledTreeItem>
        <StyledTreeItem nodeId={'4'} label={types[10].fields[3].name}>
          <StyledTreeItem nodeId={'4.1'} label={`type -> ${types[3].name}`}>
            <StyledTreeItem
              nodeId={'4.1.1'}
              label={`${types[3].fields[0].name}: String!`}
            >
              <StyledTreeItem
                nodeId={'4.1.1.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.2'}
              label={`${types[3].fields[1].name}: String`}
            >
              <StyledTreeItem
                nodeId={'4.1.2.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.3'}
              label={`${types[3].fields[2].name}: ID!`}
            >
              <StyledTreeItem
                nodeId={'4.1.3.1'}
                label={types[6].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.4'}
              label={`${types[3].fields[3].name}: Continent!`}
            >
              <StyledTreeItem
                nodeId={'4.1.4.1'}
                label={`find for the  field "Continent" in the root element`}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.5'}
              label={`${types[3].fields[4].name}: [String!]!`}
            >
              <StyledTreeItem
                nodeId={'4.1.5.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.6'}
              label={`${types[3].fields[5].name}: String`}
            >
              <StyledTreeItem
                nodeId={'4.1.6.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.7'}
              label={`${types[3].fields[6].name}: String!`}
            >
              <StyledTreeItem
                nodeId={'4.1.7.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.8'}
              label={`${types[3].fields[7].name}: String!`}
            >
              <StyledTreeItem
                nodeId={'4.1.8.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.9'}
              label={`${types[3].fields[8].name}: [Language!]!`}
            >
              <StyledTreeItem
                nodeId={'4.1.9.1'}
                label={`${types[8].fields[0].name}: ${types[6].name}!`}
              >
                <StyledTreeItem
                  nodeId={'4.1.9.1.1'}
                  label={types[6].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'4.1.9.2'}
                label={`${types[8].fields[1].name}: ${types[12].name}!`}
              >
                <StyledTreeItem
                  nodeId={'4.1.9.2.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'4.1.9.3'}
                label={`${types[8].fields[2].name}: ${types[12].name}!`}
              >
                <StyledTreeItem
                  nodeId={'4.1.9.3.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'4.1.9.4'}
                label={`${types[8].fields[1].name}: ${types[0].name}!`}
              >
                <StyledTreeItem
                  nodeId={'4.1.9.4.1'}
                  label={types[0].description}
                ></StyledTreeItem>
              </StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.10'}
              label={`${types[3].fields[9].name}(lang:String): String!`}
            >
              <StyledTreeItem
                nodeId={'4.1.10.1'}
                label={`type -> ${types[12].name}`}
              >
                <StyledTreeItem
                  nodeId={'4.1.10.1.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'4.1.10.2'}
                label={`argument -> lang:${types[12].name}`}
              >
                <StyledTreeItem
                  nodeId={'4.1.10.2.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.11'}
              label={`${types[3].fields[10].name}: String!`}
            >
              <StyledTreeItem
                nodeId={'4.1.11.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.12'}
              label={`${types[3].fields[11].name}: String!`}
            >
              <StyledTreeItem
                nodeId={'4.1.12.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.13'}
              label={`${types[3].fields[12].name}: [String!]!`}
            >
              <StyledTreeItem
                nodeId={'4.1.13.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.14'}
              label={`${types[3].fields[13].name}: [State!]!`}
            >
              <StyledTreeItem
                nodeId={'4.1.14.1'}
                label={`code: ${types[12].name}`}
              >
                <StyledTreeItem
                  nodeId={'4.1.14.1.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'4.1.14.2'}
                label={`country:${types[3].name}!`}
              >
                <StyledTreeItem
                  nodeId={'4.1.14.2.1'}
                  label={`find for the  field "Country" in the root element`}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'4.1.14.3'}
                label={`name: ${types[12].name}!`}
              >
                <StyledTreeItem
                  nodeId={'4.1.14.3.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'4.1.15'}
              label={`${types[3].fields[14].name}: [Subdivision!]!`}
            >
              <StyledTreeItem
                nodeId={'4.1.15.1'}
                label={`code: ${types[6].name}`}
              >
                <StyledTreeItem
                  nodeId={'4.1.15.1.1'}
                  label={types[6].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'4.1.15.2'}
                label={`emoji: ${types[12].name}`}
              >
                <StyledTreeItem
                  nodeId={'4.1.15.2.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'4.1.15.3'}
                label={`name: ${types[12].name}!`}
              >
                <StyledTreeItem
                  nodeId={'4.1.15.3.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
            </StyledTreeItem>
          </StyledTreeItem>
          <StyledTreeItem
            nodeId={'4.2'}
            label={`argument -> code:${types[6].name}`}
          >
            <StyledTreeItem
              nodeId={'4.2.1'}
              label={types[6].description}
            ></StyledTreeItem>
          </StyledTreeItem>
        </StyledTreeItem>
        <StyledTreeItem nodeId={'5'} label={types[10].fields[4].name}>
          <StyledTreeItem nodeId={'5.1'} label={`type -> ${types[8].name}`}>
            <StyledTreeItem
              nodeId={'5.1.1'}
              label={`${types[8].fields[0].name}: ${types[6].name}!`}
            >
              <StyledTreeItem
                nodeId={'5.1.1.1'}
                label={types[6].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'5.1.2'}
              label={`${types[8].fields[1].name}: ${types[12].name}!`}
            >
              <StyledTreeItem
                nodeId={'5.1.2.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'5.1.3'}
              label={`${types[8].fields[2].name}: ${types[12].name}!`}
            >
              <StyledTreeItem
                nodeId={'5.1.3.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'5.1.4'}
              label={`${types[8].fields[1].name}: ${types[0].name}!`}
            >
              <StyledTreeItem
                nodeId={'5.1.4.1'}
                label={types[0].description}
              ></StyledTreeItem>
            </StyledTreeItem>
          </StyledTreeItem>
          <StyledTreeItem
            nodeId={'5.2'}
            label={`argument -> code:${types[6].name}`}
          >
            <StyledTreeItem
              nodeId={'5.2.1'}
              label={types[6].description}
            ></StyledTreeItem>
          </StyledTreeItem>
        </StyledTreeItem>
        <StyledTreeItem nodeId={'6'} label={types[10].fields[5].name}>
          <StyledTreeItem nodeId={'6.1'} label={`type -> [${types[8].name}!]!`}>
            <StyledTreeItem
              nodeId={'6.1.1'}
              label={`${types[8].fields[0].name}: ${types[6].name}!`}
            >
              <StyledTreeItem
                nodeId={'6.1.1.1'}
                label={types[6].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'6.1.2'}
              label={`${types[8].fields[1].name}: ${types[12].name}!`}
            >
              <StyledTreeItem
                nodeId={'6.1.2.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'6.1.3'}
              label={`${types[8].fields[2].name}: ${types[12].name}!`}
            >
              <StyledTreeItem
                nodeId={'6.1.3.1'}
                label={types[12].description}
              ></StyledTreeItem>
            </StyledTreeItem>
            <StyledTreeItem
              nodeId={'6.1.4'}
              label={`${types[8].fields[1].name}: ${types[0].name}!`}
            >
              <StyledTreeItem
                nodeId={'6.1.4.1'}
                label={types[0].description}
              ></StyledTreeItem>
            </StyledTreeItem>
          </StyledTreeItem>
          <StyledTreeItem
            nodeId={'6.2'}
            label={`arg -> filter:${types[9].name} = {}`}
          >
            <StyledTreeItem nodeId={'6.2.1'} label={`code:${types[13].name}`}>
              <StyledTreeItem nodeId={'6.2.1.1'} label={`eq:${types[12].name}`}>
                <StyledTreeItem
                  nodeId={'6.2.1.1.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'6.2.1.2'}
                label={`in:[${types[12].name}!]`}
              >
                <StyledTreeItem
                  nodeId={'6.2.1.2.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem nodeId={'6.2.1.3'} label={`ne:${types[12].name}`}>
                <StyledTreeItem
                  nodeId={'6.2.1.3.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'6.2.1.4'}
                label={`nin:[${types[12].name}!]`}
              >
                <StyledTreeItem
                  nodeId={'6.2.1.4.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
              <StyledTreeItem
                nodeId={'6.2.1.5'}
                label={`regex:${types[12].name}`}
              >
                <StyledTreeItem
                  nodeId={'6.2.1.5.1'}
                  label={types[12].description}
                ></StyledTreeItem>
              </StyledTreeItem>
            </StyledTreeItem>
          </StyledTreeItem>
        </StyledTreeItem>
      </StyledTreeItem>
    </TreeView>
  );
};

export default DocTreeView;
