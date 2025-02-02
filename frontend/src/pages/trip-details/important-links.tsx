import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { CreateLinkModal } from "./create-link-modal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface ImportantLinks {
  id: string,
  title: string,
  url: string
}[]

export function ImportantLinks() {
  const { tripId } = useParams()
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false)
  const [links, setLinks] = useState<ImportantLinks[]>([])

  function openCreateLinkModal() {
    setIsCreateLinkModalOpen(true)
  }

  function closeCreateLinkModal() {
    setIsCreateLinkModalOpen(false)
  }

  useEffect(() => {
    api.get(`/trips/${tripId}/links`).then(response => setLinks(response.data.links))
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>
      <div className="space-y-5">

        {links.map(link => {
          return (
            <div key={link.id} className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="block font-medium text-zinc-100">{link.title}</span>
                <a href={link.url} className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                  {link.url}
                </a>
              </div>
              <Link2 className="text-zinc-400 size-5 shrink-0" />
            </div>
          )
        })}

      </div>

      <Button onClick={openCreateLinkModal} size="full" variant="secondary">
        <Plus className="size-5" />
        Cadastrar Novo Link
      </Button>

      {isCreateLinkModalOpen && (
        <CreateLinkModal closeCreateLinkModal={closeCreateLinkModal} />
      )}
    </div>
  )
}