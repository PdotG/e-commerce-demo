import { useGetProductField } from "@/api/getProductField";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FilterTypes } from "@/types/filters";

const FilterOrigin = () => {
  const { result, loading }: FilterTypes = useGetProductField();

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Type</p>
      {loading && result === null && <p>Loading...</p>}

      <RadioGroup>
        {result != null &&
          result.schema.attributes.spiciness.enum.map((origin: string) => (
            <div key={origin} className="flex items-center space-x-2">
              <RadioGroupItem value={origin} id={origin} />
              <Label htmlFor={origin}>{origin}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};

export default FilterOrigin;
