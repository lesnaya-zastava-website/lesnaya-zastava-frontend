export const CardEmployee: React.FC<{
  fullName: string;
  post: string;
  qualification: string;
  specialization: string;
  srcImg: string;
  altImg?: string;
}> = ({ fullName, post, qualification, specialization, srcImg, altImg }) => {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 rounded-xl border border-muted bg-background p-6 text-center shadow-md transition hover:shadow-lg sm:max-w-[360px] md:max-w-[400px] lg:max-w-[430px]">
      <img
        src={srcImg}
        alt={altImg || fullName}
        className="h-32 w-32 rounded-full border-2 border-primary object-cover shadow-sm"
      />
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">{fullName}</h2>
        <p className="text-sm text-muted-foreground">{post}</p>
        <p className="text-sm text-muted-foreground">{qualification}</p>
        <p className="text-sm text-muted-foreground">{specialization}</p>
      </div>
    </div>
  );
};
