export default interface IrequestType {
  operationName: string | undefined;
  query: string | undefined;
  variable?: Record<string, string | number> | null;
}
