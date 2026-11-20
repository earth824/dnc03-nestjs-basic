export abstract class Hasher {
  abstract hash(plain: string): string;

  abstract compare(plain: string, hash: string): boolean;
}
