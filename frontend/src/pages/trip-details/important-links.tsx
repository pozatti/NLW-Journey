import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>
      <div className="space-y-5">

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do AirBnb</span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/44476229?adults=12&children=3&search_mode=regular_search&check_in=2025-01-11&check_out=2025-01-16&source_impression_id=p3_1721829093_P33-nbJ-5ca-sbMd&previous_page_section_name=1000&federated_search_id=5d925f90-bb9e-450c-8ea4-ed6c080fdfc9
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do AirBnb</span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/44476229?adults=12&children=3&search_mode=regular_search&check_in=2025-01-11&check_out=2025-01-16&source_impression_id=p3_1721829093_P33-nbJ-5ca-sbMd&previous_page_section_name=1000&federated_search_id=5d925f90-bb9e-450c-8ea4-ed6c080fdfc9
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

      </div>
      
      <Button size="full" variant="secondary">
        <Plus className="size-5" />
        Cadastrar Novo Link
      </Button>
    </div>
  )
}