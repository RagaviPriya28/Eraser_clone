import React, { useContext, useEffect, useState } from 'react';
import { FileListContext } from '@/app/_context/FilesListContext';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Archive, MoreHorizontal, Trash2, Search } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export interface FILE {
  archive: boolean;
  createdBt: string;
  document: string;
  fileName: string;
  teamId: string;
  whiteboard: string;
  _id: string;
  _creationTime: number;
}

function FileList() {
  const { fileList_, setFileList_ } = useContext(FileListContext);
  const [fileList, setFileList] = useState<FILE[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();
  const deleteFile = useMutation(api.file.deleteFile);

  useEffect(() => {
    if (fileList_) {
      setFileList(fileList_);
    }
  }, [fileList_]);

  const handleDelete = async (fileId: string) => {
    try {
      await deleteFile({ _id: fileId });
      setFileList((prevList) => prevList.filter((file) => file._id !== fileId));
      toast.success('File deleted successfully');
    } catch (error) {
      console.error('Error deleting file:', error);
      toast.error('Failed to delete file');
    }
  };

  const filteredFiles = fileList.filter((file) =>
    file.fileName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-10">
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            type="text"
            placeholder="Search files..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">File Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Created At</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Edited</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Author</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {filteredFiles.map((file: FILE, index: number) => (
              <tr
                key={index}
                className="odd:bg-gray-50 cursor-pointer"
                onClick={() => router.push('/workspace/' + file._id)}
              >
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {file.fileName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {moment(file._creationTime).format('DD MMM YYYY')}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {moment(file._creationTime).format('DD MMM YYYY')}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {user && (
                    <Image
                      src={user?.picture}
                      alt="user"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  )}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontal />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="gap-3">
                        <Archive className="h-4 w-4" /> Archive
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="gap-3"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(file._id);
                        }}
                      >
                        <Trash2 className="h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FileList;