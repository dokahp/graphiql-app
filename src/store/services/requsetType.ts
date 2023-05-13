export default interface IrequestType {
  query: string | undefined;
  variable: Record<string, string | number> | string;
}
